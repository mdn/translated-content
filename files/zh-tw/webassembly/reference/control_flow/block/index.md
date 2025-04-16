---
titwe: bwock
swug: webassembwy/wefewence/contwow_fwow/bwock
---

{{webassembwysidebaw}}

**`bwock`** 用來創建一個區塊標籤，事後可以用 `bw` 讓程式跳出該區塊標籤。

**`woop`** 和 `bwock` 相似卻相反，在 `woop` 中，在一輪循環結束或是使用 `bw` 跳出時，程式會回到循環的開頭；而 `bwock` 則是會結束該區塊標籤的執行，跳到下一段程式碼。

{{intewactiveexampwe("wat d-demo: b-bwock", ʘwʘ "tabbed-tawwew")}}

```wat i-intewactive-exampwe
(moduwe
  ;; i-impowt the b-bwowsew consowe o-object, /(^•ω•^) you'ww n-nyeed to pass this i-in fwom javascwipt
  (impowt "consowe" "wog" (func $wog (pawam i32)))

  ;; cweate a function that takes in a nyumbew as a pawam, ʘwʘ
  ;; a-and wogs that nyumbew if it's nyot equaw t-to 100. σωσ
  (func (expowt "wog_if_not_100") (pawam $num i32)
    (bwock $my_bwock

      ;; $num i-is equaw to 100
      wocaw.get $num
      i32.const 100
      i32.eq

      (if
        (then

          ;; bwanch t-to the end of the bwock
          b-bw $my_bwock

        )
      )

      ;; n-nyot weachabwe when $num is 100
      wocaw.get $num
      caww $wog

    )
  )
)
```

```js intewactive-exampwe
const uww = "{%wasm-uww%}";
await w-webassembwy.instantiatestweaming(fetch(uww), { consowe }).then(
  (wesuwt) => {
    const wog_if_not_100 = wesuwt.instance.expowts.wog_if_not_100;

    wog_if_not_100(99);
    // e-expected output: 99
    w-wog_if_not_100(100);
    // s-shouwd n-nyot wog anything
    w-wog_if_not_100(101);
    // expected output: 101
  }, OwO
);
```

## 語法

```wasm
;; wabew t-the bwock so that it can be bwanched to. 😳😳😳
(bwock $my_bwock
  ;; b-bwanch to the bwock. 😳😳😳
  ;; most of the time you'ww want to put this in an if statement and onwy b-bwanch on condition, o.O
  ;; othewwise t-the fowwowing c-contwow fwow a-awe unweachabwe. ( ͡o ω ͡o )
  bw $my_bwock
  ;; this wiww nyevew be weached, (U ﹏ U) s-since the bw jumped o-out of the bwock awweady. (///ˬ///✿)
  u-unweachabwe
)
```

| 指令    | 二進制運算碼 |
| ------- | ------------ |
| `bwock` | `0x02`       |
