package lf;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;


public class Utils extends BasePage {

   //    To click element
    public static void click_Element(By by) { driver.findElement(by).click(); }

    //    Verify actual with expected Results and if its not match will get message
    public static void assert_element(Object actual, Object expected, String message) {//for Assert
        Assert.assertEquals(actual, expected, message);
    }

    public static void selectByValue(By by, String text)
    {
        new Select(driver.findElement(by)).selectByValue(text);
    }

    //    To Input any text
    public static void send_keys(By by, String b) { driver.findElement(by).sendKeys(b); }

    // Will wait until element is clickable then click
    public static void waitAndClick(By by, int time) {
        WebDriverWait wait = new WebDriverWait(driver, time);
        wait.until(ExpectedConditions.visibilityOfElementLocated(by));
        driver.findElement(by).click();
    }

    // to select from drop list by index
    public static void selectByIndex(By element, int numb) {
        new Select(driver.findElement(element)).selectByIndex(numb);
    }
    // to wait for element to be display
    public static void waitForElementToBeDisplay(By by, int time) {
        WebDriverWait wait = new WebDriverWait(driver, time);
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(by)));
    }

    public static void mouseHover(By by) {
        WebElement myelement = driver.findElement(by);
        Actions action = new Actions(driver);
        action.moveToElement(myelement).click();
        action.build().perform();
    }
    //  to sleep web driver for given time
    public  void threadSleep(int time){
        try {
            Thread.sleep(time);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}



