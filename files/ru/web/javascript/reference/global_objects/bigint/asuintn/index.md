---
title: BigInt.asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
---

{{JSRef}}

The **`BigInt.asUintN`** static method is used to wrap a BigInt value to an unsigned integer between 0 and 2width-1.

{{EmbedInteractiveExample("pages/js/bigint-asuintn.html", "taller")}}

## Syntax

```
BigInt.asUintN(width, bigint);
```

### Parameters

- `width`
  - : The amount of bits available for the integer size.
- `bigint`
  - : The integer to clamp to fit into the supplied bits.

### Returns

The value of `bigint` modulo 2`width` as an unsigned integer.

## Examples

### Staying in 64-bit ranges

The `BigInt.asUintN()` method can be useful to stay in the range of 64-bit arithmetic.

```js
const max = 2n ** 64n - 1n;

BigInt.asUintN(64, max);
// ↪ 18446744073709551615n

BigInt.asUintN(64, max + 1n);
// ↪ 0n
// zero because of overflow
```

## Specifications

| Specification                                                                            |
| ---------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-bigint.asuintn', 'BigInt.asUintN()')}} |

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("BigInt")}}
- {{JSxRef("BigInt.asIntN()")}}
