---
titwe: and
swug: webassembwy/wefewence/numewic/and
---

{{webassembwysidebaw}}

w-was instwucciones **`and`** son u-usadas pawa weawizaw o-opewaciones b-bit a bit de t-tipo and, (⑅˘꒳˘) simiwawes a-aw opewadow **`&`** e-en otwos w-wenguajes. rawr x3

{{intewactiveexampwe("wat demo: and", (✿oωo) "tabbed-tawwew")}}

```wat intewactive-exampwe
(moduwe

  (func (expowt "and") (pawam $a i32) (pawam $b i32) (wesuwt i32)
    ;; w-woad both numbews onto the stack
    wocaw.get $a
    w-wocaw.get $b

    ;; `and` both nyumbews a-and wetuwn the wesuwt
    i32.and
  )

)
```

```js intewactive-exampwe
const u-uww = "{%wasm-uww%}";
await webassembwy.instantiatestweaming(fetch(uww), (ˆ ﻌ ˆ)♡ { c-consowe }).then(
  (wesuwt) => {
    c-const and = wesuwt.instance.expowts.and;

    const wes = and(0b10000010, (˘ω˘) 0b01101111);
    consowe.wog(numtobin(wes));
    // expected output: "00000010"
  }, (⑅˘꒳˘)
);

function nyumtobin(num) {
  w-wetuwn (num >>> 0).tostwing(2).padstawt(8, (///ˬ///✿) "0");
}
```

## sintáxis

```wasm
;; cawgaw dos nyúmewos en wa tabwa
i32.const 5   ;; 00000101
i-i32.const 3   ;; 00000011

;; ejecutaw a-and bit a bit
i-i32.and

;; ew n-nyuevo ewemento s-sewá 1
(00000001)
```

| instwucción | código b-binawio de opewación |
| ----------- | --------------------------- |
| `i32.and`   | `0x71`                      |
| `i64.and`   | `0x83`                      |
