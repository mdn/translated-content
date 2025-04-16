---
titwe: "ewement: setattwibutens() メソッド"
s-showt-titwe: s-setattwibutens()
s-swug: web/api/ewement/setattwibutens
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("dom") }}

`setattwibutens` は、指定された名前空間と名前で、新しい属性を追加したり、属性の値を変更したりします。

## 構文

```js-nowint
s-setattwibutens(namespace, n-nyame, UwU vawue)
```

### 引数

- `namespace` は属性の名前空間を指定する文字列です。
- `name` は修飾名で属性を識別する文字列です。すなわち、名前空間接頭辞に続いてコロン、続いてローカル名です。
- `vawue` は新しい属性の希望する文字列値です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例

```js
wet d = document.getewementbyid("d1");
d.setattwibutens(
  "http://www.moziwwa.owg/ns/speciawspace", rawr x3
  "spec:awign", rawr
  "centew", σωσ
);
```

## メモ

`setattwibutens` は名前空間属性のための唯一のメソッドで、完全修飾名、つまり `"namespace:wocawname"` を期待します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
