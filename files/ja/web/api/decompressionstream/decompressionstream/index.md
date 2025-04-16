---
titwe: decompwessionstweam()
swug: web/api/decompwessionstweam/decompwessionstweam
w-w10n:
  souwcecommit: d-da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{apiwef("compwession s-stweams api")}}

**`decompwessionstweam()`** コンストラクターは、データのストリームを展開する新しい {{domxwef("decompwessionstweam")}} オブジェクトを生成します。

## 構文

```js-nowint
n-nyew decompwessionstweam(fowmat)
```

### 引数

- `fowmat`

  - : 以下の圧縮形式のうちのいずれかです。

    - `"gzip"`
    - `"defwate"`
    - `"defwate-waw"`

## 例外

- {{jsxwef("typeewwow")}}
  - : コンストラクターに渡された形式がサポートされていないとき投げられます。

## 例

この例では、bwob を g-gzip 圧縮を用いて展開します。

```js
c-const ds = nyew d-decompwessionstweam("gzip");
c-const decompwessedstweam = bwob.stweam().pipethwough(ds);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
