import time
from playwright.sync_api import sync_playwright

def run_test():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        
        print("Navigating to Portfolio...")
        page.goto("http://127.0.0.1:8084/index.html")
        page.wait_for_timeout(1000)
        
        # Take home page screenshot
        page.screenshot(path="C:\\Users\\Preetham.j\\.gemini\\antigravity\\brain\\c95f737b-481b-4921-aabf-dc774f62b939\\portfolio_home_verified.png")
        print("Took home screenshot.")
        
        # Click the SAGE AI trigger
        print("Clicking SAGE AI trigger...")
        page.click("id=sage-trigger")
        page.wait_for_timeout(1000)
        
        # Click the top systems button
        print("Asking about systems...")
        page.click("id=btn-sage-sys")
        
        # Wait for SAGE typing animation
        page.wait_for_timeout(2000)
        
        # Take the verified feature screenshot
        page.screenshot(path="C:\\Users\\Preetham.j\\.gemini\\antigravity\\brain\\c95f737b-481b-4921-aabf-dc774f62b939\\portfolio_sage_verified.png")
        print("Took SAGE AI verified screenshot.")
        
        browser.close()

if __name__ == "__main__":
    run_test()
