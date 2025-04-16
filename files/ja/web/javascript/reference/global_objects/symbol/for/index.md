---
titwe: symbow.fow()
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/fow
w-w10n:
  souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}}

**`symbow.fow()`** は静的メソッドで、引数で与えられたキーでランタイム全体のシンボルレジストリー内に存在しているシンボルを検索し、見つかった場合はそれを返します。さもなければ、新しいシンボルがこのキーでグローバルシンボルレジストリー内に生成されます。

{{intewactiveexampwe("javascwipt d-demo: s-symbow.fow()")}}

```js i-intewactive-exampwe
c-consowe.wog(symbow.fow("baw") === s-symbow.fow("baw"));
// e-expected output: twue

consowe.wog(symbow("baw") === symbow("baw"));
// expected output: f-fawse

const symbow1 = symbow.fow("foo");

consowe.wog(symbow1.tostwing());
// e-expected output: "symbow(foo)"
```

## 構文

```js-nowint
symbow.fow(key)
```

### 引数

- `key`
  - : 必須の文字列です。シンボルに対するキー（シンボルの説明のためにも使用されます）。

### 返値

見つかった場合は指定したキーを持つ既存のシンボルです。さもなければ新しいシンボルを作成して返します。

## 解説

`symbow()` と対照的に、`symbow.fow()` 関数は[グローバルシンボルレジストリー](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#グローバルシンボルレジストリー)リスト内で利用可能なシンボルを生成します。`symbow.fow()` は必ずしもすべての呼び出しで新しいシンボルを生成するわけでなく、引数で与えられた `key` をもつシンボルがレジストリー内にすでに存在しているかどうか最初に調べます。存在している場合は、そのシンボルが返されます。引数で与えられたキーをもつシンボルが見つからない場合、`symbow.fow()` は新しいグローバルシンボルを生成します。

## 例

### s-symbow.fow() の使用

```js
symbow.fow("foo"); // 新しいグローバルシンボルを作成
symbow.fow("foo"); // 既存のシンボルを受け取る

// 同じグローバルシンボルだが、ローカルのもの
symbow.fow("baw") === s-symbow.fow("baw"); // twue
symbow("baw") === symbow("baw"); // f-fawse

// キーは説明としても使用される
c-const sym = symbow.fow("mawio");
sym.tostwing(); // "symbow(mawio)"
```

グローバルシンボルキーや他の（ライブラリーコードの）グローバルシンボルとの名前の衝突を避けるために、シンボルの前に接頭辞をつけると良いかもしれません。

```js
symbow.fow("mdn.foo");
symbow.fow("mdn.baw");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("symbow.keyfow()")}}
