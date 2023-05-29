---
title: EXSLT
slug: Web/EXSLT
---

{{ XsltRef() }}
EXSLT is a set of extensions to [XSLT](en/XSLT). There are a number of modules; those that are supported by Firefox are listed below:

- [Common](#Common) (`exsl`)
  - : Provides basic extension elements and functions.
- [Math](#Math) (`math`)
  - : Provides routines for comparing nodes.
- [Regular expressions](#Regular_expressions) (`regexp`)
  - : Provides facilities for using regular expressions in JavaScript syntax.
- [Sets](#Sets) (`set`)
  - : Provides routines for manipulating sets.
- [Strings](#Strings) (`str`)
  - : Provides functions for string manipulation.

### Using EXSLT

To use an EXSLT function, you need to declare the namespace the function is in, and then use the appropriate prefix when calling the function. For example, to use the regular expressions package:

```xml
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:regexp="http://exslt.org/regular-expressions">
  <xsl:template match="/">
    ...
    <xsl:value-of select="regexp:replace(/root/@value, 'before', 'gi', 'AFTER')"/>
    ...
  </xsl:template>

</xsl:stylesheet>
```

### Common

The EXSLT Common package provides basic functions that expand upon the capabilities of XSLT. The namespace for the Common package is `http://exslt.org/common`.

#### Functions

- [exsl:node-set](en/EXSLT/exsl/node-set)
- [exsl:object-type](en/EXSLT/exsl/object-type)

### Math

The EXSLT Math package provides functions for working with numeric values and comparing nodes. The namespace for the Math package is `http://exslt.org/math`.

#### Functions

- [math:highest](en/EXSLT/math/highest)
- [math:lowest](en/EXSLT/math/lowest)
- [math:max](en/EXSLT/math/max)
- [math:min](en/EXSLT/math/min)

### Regular expressions

The EXSLT Regular Expressions package provides functions that allow testing, matching, and replacing text using JavaScript style regular expressions.

The EXSLT Regular Expressions namespace is `http://exslt.org/regular-expressions`.

#### Functions

- [regexp:match](en/EXSLT/regexp/match)
- [regexp:replace](en/EXSLT/regexp/replace)
- [regexp:test](en/EXSLT/regexp/test)

### Sets

The EXSLT Sets package offers functions that let you perform set manipulation. The namespace for these functions is `http://exslt.org/sets`.

#### Functions

- [set:difference](en/EXSLT/set/difference)
- [set:distinct](en/EXSLT/set/distinct)
- [set:intersection](en/EXSLT/set/intersection)
- [set:has-same-node](en/EXSLT/set/has-same-node)
- [set:leading](en/EXSLT/set/leading)
- [set:trailing](en/EXSLT/set/trailing)

### Strings

The EXSLT Strings package provides functions that allow the manipulation of strings. The namespace for the Strings package is `http://exslt.org/strings`.

#### Functions

- [str:concat](en/EXSLT/str/concat)
- [str:split](en/EXSLT/str/split)
- [str:tokenize](en/EXSLT/str/tokenize)

### See also

- [EXSLT web site](http://www.exslt.org/)
