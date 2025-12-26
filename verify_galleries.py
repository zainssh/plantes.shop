
import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Create a directory for screenshots if it doesn't exist
        output_dir = "gallery_screenshots"
        os.makedirs(output_dir, exist_ok=True)

        product_pages = [
            "product-yucca.html",
            "product-areca.html",
            "product-ficus-bonsai.html"
        ]

        base_path = f"file://{os.getcwd()}"

        for product_file in product_pages:
            product_name = product_file.split('.')[0]
            await page.goto(f"{base_path}/{product_file}")

            # Wait for the gallery to be visible
            gallery_selector = ".olive-gallery"
            await page.wait_for_selector(gallery_selector)

            gallery_element = page.locator(gallery_selector)

            # Take a screenshot of the gallery
            screenshot_path = os.path.join(output_dir, f"{product_name}_gallery.png")
            await gallery_element.screenshot(path=screenshot_path)
            print(f"Screenshot saved for {product_name} at {screenshot_path}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
