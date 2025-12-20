
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Desktop screenshot
        await page.set_viewport_size({"width": 1920, "height": 1080})
        await page.goto("file:///app/index.html")
        await page.screenshot(path="desktop_view.png")

        # Mobile screenshot
        await page.set_viewport_size({"width": 375, "height": 812})
        await page.goto("file:///app/index.html")
        await page.click("#mobileMenuButton")
        await page.wait_for_selector(".mobile-nav.active")
        await page.screenshot(path="mobile_view.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
