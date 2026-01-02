
import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Create a directory for screenshots
        os.makedirs("verification_screenshots", exist_ok=True)

        # Define pages and languages
        pages_to_test = [
            "index.html",
            "arbres-et-grands-vegetaux.html",
            "cactus-et-succulentes.html",
            "palmiers.html",
            "plantes-exterieur-arbustes.html",
            "plantes-interieur-decoratives.html"
        ]

        languages = ["fr", "ar", "en"]

        for page_file in pages_to_test:
            for lang in languages:
                # Navigate to the local file
                await page.goto(f"file://{os.path.abspath(page_file)}")

                # Change the language by executing JavaScript
                await page.evaluate(f"changeLanguage('{lang}')")

                # Wait for any animations or rendering
                await page.wait_for_timeout(1000)

                # Take a screenshot
                screenshot_path = f"verification_screenshots/{page_file.replace('.html', '')}_{lang}.png"
                await page.screenshot(path=screenshot_path, full_page=True)
                print(f"Screenshot saved to {screenshot_path}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
