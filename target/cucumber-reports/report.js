$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/FeatureFiles/Homepage.feature");
formatter.feature({
  "line": 2,
  "name": "verify User Is Able to Navigate to All pages",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@category"
    }
  ]
});
formatter.scenarioOutline({
  "line": 16,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@servicesPages"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Click on Services page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User navigate to \u003cpagelink\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see \u003cservicesPage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;",
  "rows": [
    {
      "cells": [
        "pagelink",
        "servicesPage"
      ],
      "line": 22,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;1"
    },
    {
      "cells": [
        "Analyser Online",
        "Analyser Online   AML Analytics"
      ],
      "line": 23,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;2"
    },
    {
      "cells": [
        "Global Benchmark",
        "Global Benchmark   AML Analytics"
      ],
      "line": 24,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;3"
    },
    {
      "cells": [
        "Sandbox",
        "Sandbox   AML Analytics"
      ],
      "line": 25,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;4"
    },
    {
      "cells": [
        "Custom Testing",
        "Custom Testing   AML Analytics"
      ],
      "line": 26,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;5"
    },
    {
      "cells": [
        "Sanctions Alert Service (SAS)",
        "Sanctions Alert Service (SAS)   AML Analytics"
      ],
      "line": 27,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;6"
    },
    {
      "cells": [
        "SANCTIONS ALERT TESTING (SAT)",
        "SANCTIONS ALERT TESTING (SAT)   AML Analytics"
      ],
      "line": 28,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;7"
    },
    {
      "cells": [
        "Transaction Monitoring Validator",
        "Transaction Monitoring Validator   AML Analytics"
      ],
      "line": 29,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5765374455,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@servicesPages"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Click on Services page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User navigate to Analyser Online",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see Analyser Online   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 82031592,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 154963579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Analyser Online",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 315405396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Analyser Online   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesPage(String)"
});
formatter.result({
  "duration": 7208523,
  "error_message": "java.lang.AssertionError: Test case fail expected [Analyser Online   AML Analytics] but found [Analyser Online | AML Analytics]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat PO.Utils.assert_element(Utils.java:17)\r\n\tat Test.MyStepdefs.shouldAbleToSeeServicesPage(MyStepdefs.java:56)\r\n\tat ✽.Then should able to see Analyser Online   AML Analytics(src/test/Resources/FeatureFiles/Homepage.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1178881370,
  "status": "passed"
});
formatter.before({
  "duration": 5682176653,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@servicesPages"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Click on Services page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User navigate to Global Benchmark",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see Global Benchmark   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 48325,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 138649890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Global Benchmark",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 344874127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Global Benchmark   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesPage(String)"
});
formatter.result({
  "duration": 6852716,
  "error_message": "java.lang.AssertionError: Test case fail expected [Global Benchmark   AML Analytics] but found [Global Benchmark | AML Analytics]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat PO.Utils.assert_element(Utils.java:17)\r\n\tat Test.MyStepdefs.shouldAbleToSeeServicesPage(MyStepdefs.java:56)\r\n\tat ✽.Then should able to see Global Benchmark   AML Analytics(src/test/Resources/FeatureFiles/Homepage.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1096925045,
  "status": "passed"
});
