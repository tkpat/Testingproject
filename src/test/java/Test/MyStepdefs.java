package Test;

import PO.HomePage;
import PO.Services;
import PO.Utils;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;

public class MyStepdefs extends Utils {

    HomePage hm = new HomePage();
    Services services  = new Services();

    @Given("^user is on the home page$")
    public void userIsOnTheHomePage() {
    }

    @When("^User click On  ([^\"]*)$")
    public void userClickOnLink(String link) {
//        waitForElementToBeDisplay(By.linkText(link),2000);
        click_Element(By.linkText(link));
    }
    @Then("^should be able to see ([^\"]*)$")
    public void userShouldBeAbleToSeeTitle(String page) {
        String actualTitle = driver.getTitle();
        String removespecialchara = actualTitle.replace('|',' ');
        System.out.println(actualTitle);
        assert_element(removespecialchara,page,"Test case fail");

    }



    @When("^User Click on Services page")
    public void userClickOnServicesPage() {
        services.clickOnServicesPage();

    }

    @And("^User navigate to ([^\"]*)$")
    public void userNavigateToPagelink(String  pagelink) {
        String  css = "[title=" + '"' +  pagelink + '"' + "]";
        System.out.println(css);
//        waitForElementToBeDisplay(By.cssSelector(css),10);
        click_Element(By.cssSelector(css));
    }

    @Then("^should able to see ([^\"]*)$")
    public void shouldAbleToSeeServicesPage(String  servicesPage) {
        String actualTitle = driver.getTitle();
        String removespecialchara = actualTitle.replace('|',' ');
        System.out.println(actualTitle);
        assert_element(removespecialchara,servicesPage,"Test case fail");
    }



}





