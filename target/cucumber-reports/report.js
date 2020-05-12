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
  "duration": 8845523355,
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
  "duration": 579722770,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 236075741,
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
  "duration": 817899568,
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
  "duration": 7381711,
  "status": "passed"
});
formatter.after({
  "duration": 759276531,
  "status": "passed"
});
formatter.before({
  "duration": 5208286452,
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
  "duration": 54312,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 161895134,
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
  "duration": 512998712,
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
  "duration": 4451435,
  "status": "passed"
});
formatter.after({
  "duration": 588629489,
  "status": "passed"
});
formatter.before({
  "duration": 5795417447,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;4",
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
  "name": "User navigate to Sandbox",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see Sandbox   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 62010,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 173713738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sandbox",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 418633762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sandbox   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesPage(String)"
});
formatter.result({
  "duration": 15513096,
  "status": "passed"
});
formatter.after({
  "duration": 667495457,
  "status": "passed"
});
formatter.before({
  "duration": 5099913315,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;5",
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
  "name": "User navigate to Custom Testing",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see Custom Testing   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 59872,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 147659864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Custom Testing",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 288142864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Custom Testing   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesPage(String)"
});
formatter.result({
  "duration": 7794822,
  "status": "passed"
});
formatter.after({
  "duration": 602360129,
  "status": "passed"
});
formatter.before({
  "duration": 5497326958,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;6",
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
  "name": "User navigate to Sanctions Alert Service (SAS)",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see Sanctions Alert Service (SAS)   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 93656,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 146482109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanctions Alert Service (SAS)",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 251460540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanctions Alert Service (SAS)   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesPage(String)"
});
formatter.result({
  "duration": 4991132,
  "status": "passed"
});
formatter.after({
  "duration": 615208949,
  "status": "passed"
});
formatter.before({
  "duration": 4806645892,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;7",
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
  "name": "User navigate to SANCTIONS ALERT TESTING (SAT)",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see SANCTIONS ALERT TESTING (SAT)   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 76977,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 183251673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SANCTIONS ALERT TESTING (SAT)",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 329161156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SANCTIONS ALERT TESTING (SAT)   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesPage(String)"
});
formatter.result({
  "duration": 9266375,
  "status": "passed"
});
formatter.after({
  "duration": 667963309,
  "status": "passed"
});
formatter.before({
  "duration": 5225884353,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;8",
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
  "name": "User navigate to Transaction Monitoring Validator",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see Transaction Monitoring Validator   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 118460,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 154494179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction Monitoring Validator",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 282401200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction Monitoring Validator   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesPage(String)"
});
formatter.result({
  "duration": 14690720,
  "status": "passed"
});
formatter.after({
  "duration": 748743450,
  "status": "passed"
});
});