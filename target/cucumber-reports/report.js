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
  "duration": 7412091533,
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
  "duration": 178296035,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 151269679,
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
  "duration": 251811643,
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
  "duration": 5639454,
  "status": "passed"
});
formatter.before({
  "duration": 5225801816,
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
  "duration": 46614,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 142697384,
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
  "duration": 395305744,
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
  "duration": 7016495,
  "status": "passed"
});
formatter.before({
  "duration": 7594540075,
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
  "duration": 54740,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 141860895,
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
  "duration": 236386217,
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
  "duration": 4993271,
  "status": "passed"
});
formatter.before({
  "duration": 5933574871,
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
  "duration": 128295,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 157119537,
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
  "duration": 356734907,
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
  "duration": 6688913,
  "status": "passed"
});
formatter.before({
  "duration": 5793180824,
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
  "duration": 167640,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 150287789,
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
  "duration": 507611573,
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
  "duration": 15534906,
  "status": "passed"
});
formatter.before({
  "duration": 7721490865,
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
  "duration": 143264,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 147429787,
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
  "duration": 805439911,
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
  "duration": 5655704,
  "status": "passed"
});
formatter.before({
  "duration": 14447885621,
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
  "duration": 93656,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 145551537,
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
  "duration": 272318437,
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
  "duration": 4199121,
  "status": "passed"
});
});