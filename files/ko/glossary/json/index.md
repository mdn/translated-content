---
title: JSON
slug: Glossary/JSON
---
_JavaScript Object Notation_ (**JSON**) 은 데이터 교환 형식의 일종입니다. Although not a strict subset, JSON closely resembles a subset of {{Glossary("JavaScript")}} syntax. Though many programming languages support JSON, JSON is especially useful for JavaScript-based apps, including websites and browser extensions.

JSON can represent numbers, booleans, strings, `null`, arrays (ordered sequences of values), and objects (string-value mappings) made up of these values (or of other arrays and objects). JSON does not natively represent more complex data types like functions, regular expressions, dates, and so on. (Date objects by default serialize to a string containing the date in ISO format, so the information isn't completely lost.) If you need JSON to represent additional data types, transform values as they are serialized or before they are deserialized.

Much like XML, JSON has the ability to store hierarchical data unlike the more traditional CSV format. Many tools provide translation between these formats such as this online [JSON to CSV Converter](https://json-csv.com) or this alternative [JSON to CSV Converter](https://jsontoexcel.com).

## Learn more

### General knowledge

- [JSON](https://ko.wikipedia.org/wiki/JSON) on Wikipedia

### Technical reference

- [JSON](/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON) on MDN
