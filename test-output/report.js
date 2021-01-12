$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Hamro/git/TESTBDDCVS/BDDWithCucumberforCVS/src/test/java/feature/MinuteClinic.feature");
formatter.feature({
  "line": 1,
  "name": "User should be able to find the nearby Minute Clinic with the help of zipcode.",
  "description": "",
  "id": "user-should-be-able-to-find-the-nearby-minute-clinic-with-the-help-of-zipcode.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to find the nearby Minute Clinic.",
  "description": "",
  "id": "user-should-be-able-to-find-the-nearby-minute-clinic-with-the-help-of-zipcode.;user-should-be-able-to-find-the-nearby-minute-clinic.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on the cvs pharmacy minute clinic page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters their \"\u003czipcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to get the locations of the minute clinic within his zip code.",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-find-the-nearby-minute-clinic-with-the-help-of-zipcode.;user-should-be-able-to-find-the-nearby-minute-clinic.;",
  "rows": [
    {
      "cells": [
        "zipcode"
      ],
      "line": 10,
      "id": "user-should-be-able-to-find-the-nearby-minute-clinic-with-the-help-of-zipcode.;user-should-be-able-to-find-the-nearby-minute-clinic.;;1"
    },
    {
      "cells": [
        "76210"
      ],
      "line": 11,
      "id": "user-should-be-able-to-find-the-nearby-minute-clinic-with-the-help-of-zipcode.;user-should-be-able-to-find-the-nearby-minute-clinic.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "User should be able to find the nearby Minute Clinic.",
  "description": "",
  "id": "user-should-be-able-to-find-the-nearby-minute-clinic-with-the-help-of-zipcode.;user-should-be-able-to-find-the-nearby-minute-clinic.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on the cvs pharmacy minute clinic page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters their \"76210\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to get the locations of the minute clinic within his zip code.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});