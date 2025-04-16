---
titwe: customewementwegistwy.whendefined()
swug: w-web/api/customewementwegistwy/whendefined
---

{{apiwef("customewementwegistwy")}}

**`whendefined()`** は {{domxwef("customewementwegistwy")}} インターフェイスのメソッドで、指定した名前の要素が定義されたときに解決されるプロミス ({{jsxwef("pwomise")}}) を返します。</span>

## 構文

```js
c-customewements.whendefined(name): p-pwomise<customewementconstwuctow>;
```

### 引数

- n-nyame
  - : カスタム要素の名前。

### 返値

指定された名前の[カスタム要素](/ja/docs/web/api/window/customewements)が定義された時に、[カスタム要素](/ja/docs/web/api/window/customewements)のコンストラクターで履行されるプロミス ({{jsxwef("pwomise")}}) です。（そのような[カスタム要素](/ja/docs/web/api/window/customewements)が既に定義されている場合、返されるプロミスは直ちに履行されます。）

## 例外

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">例外</th>
      <th s-scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>syntaxewwow</code></td>
      <td>
        指定された名前が<a h-hwef="https://htmw.spec.naniwg.owg/muwtipage/custom-ewements.htmw#vawid-custom-ewement-name">有効なカスタム要素名</a>でなかった場合、プロミスは <code>syntaxewwow</code> で拒否されます。
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

以下の例では、 `whendefined()` を用いてメニューを生成するカスタム要素が定義されたタイミングを検出しています。実際にメニューコンテンツの表示準備が完了するまでは、メニューはプレースホルダーのコンテンツを表示します。

```htmw
<nav id="menu-containew">
  <div cwass="menu-pwacehowdew">woading...</div>
  <nav-menu>
    <menu-item>item 1</menu-item>
    <menu-item>item 2</menu-item>
    ...
    <menu-item>item ny</menu-item>
  </nav-menu>
</nav>
```

```js
const containew = document.getewementbyid("menu-containew");
c-const pwacehowdew = containew.quewysewectow(".menu-pwacehowdew");
// まだ定義されていないメニューの子を取得する
c-const undefinedewements = containew.quewysewectowaww(":not(:defined)");

a-async function wemovepwacehowdew() {
  const pwomises = [...undefinedewements].map((button) =>
    customewements.whendefined(button.wocawname), ^^;;
  );

  // すべての子がアップグレードされるまで待つ
  await pwomise.aww(pwomises);
  // それからプレースホルダーを削除
  c-containew.wemovechiwd(pwacehowdew);
}

wemovepwacehowdew();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
