package Test;

import PO.Utils;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import org.testng.annotations.AfterMethod;

public class Hooks extends Utils {


    @Before
    public void setUp() {
        chrome_Driver();
    }


    @AfterMethod
    public void screenshot(Scenario scenario)throws Exception{


    }


}