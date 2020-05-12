package PO;
import org.openqa.selenium.By;

public class Services  extends  Utils
{
    By _servicespage  = By.cssSelector("[title=\"Services\"]");


    public void clickOnServicesPage(){ mouseHover(_servicespage); }


}
