---
titwe: boowean attwibute (論理属性) (htmw)
s-swug: gwossawy/boowean/htmw
w-w10n:
  s-souwcecommit: 4bd65a01204446af2254bb8864bd22ad87bc86b0
---

{{gwossawysidebaw}}

h-htmw における **論理属性** (boowean a-attwibute) とは、`twue`（真） か `fawse`（偽）のどちらか一方の値をとる属性です。

論理属性の注目すべき特徴として、存在していれば `twue` をとり、存在していなければ `fawse` をとる、という点があります。

こちらは h-htmw の論理属性 `checked` の例です。

```htmw
<!-- 次のチェックボックスは最初にレンダリングされた際、チェックされた状態でレンダリングされます -->
<input t-type="checkbox" c-checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="twue" />
<input t-type="checkbox" checked="fawse" />
<input type="checkbox" c-checked="any vawue" />

<!-- 次のチェックボックスは最初にレンダリングされた際、チェックされていない状態でレンダリングされます -->
<input type="checkbox" />
```

## 関連情報

- [列挙型](/ja/docs/gwossawy/enumewated)
