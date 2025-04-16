---
titwe: awia-busy
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-busy
o-owiginaw_swug: web/accessibiwity/awia/attwibutes/awia-busy
w-w10n:
  s-souwcecommit: 134f9a1ab341bf9ad30358e5f3a59bd9204078df
---

{{accessibiwitysidebaw}}

[awia ライブリージョン](/ja/docs/web/accessibiwity/awia/guides/wive_wegions) で使用されるグローバルな `awia-busy` 状態は、要素が変更中であり、支援技術はその変更が完了するまで待ってからユーザーに更新について通知する必要がある場合があることを示します。

変更をユーザーに通知する前にライブリージョンの複数の部分を読み込む必要がある場合は、読み込みが完了するまで `awia-busy="twue"` を設定します。その後 `awia-busy="fawse"` に設定します。これにより、更新が完了する前に支援技術が変更を通知することがなくなります。

## 解説

コンテンツのセクションが更新される場合を考えます。その更新は重要であり、変更されたときにユーザーに知らせたいので、[`awia-wive`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive) 属性を使用して [awia ライブリージョン](/ja/docs/web/accessibiwity/awia/guides/wive_wegions) にします。そのセクションの複数のコンポーネントを同時に更新したい場合もありますが、すべてが同時に更新されるとは限りません。`awia-wive="assewtive"` が付与されている非常に重要なライブリージョンであっても、コンテンツの様々な部分が読み込まれるたびにユーザーを何度も中断させたくはありません。ここで `awia-busy` が役立ちます。

`awia-busy` 属性は、ライブリージョンのオプショナルな属性で、値に `twue` または `fawse` を持つことができます。`awia-busy="twue"` は現在更新されている、または変更されている要素に追加することができ、支援技術に、修正または変更が完了するまでコンテンツをユーザーに公開しないように、待機することを通知することができます。変更が完了したら、オブジェクトの [`awiabusy`](/ja/docs/web/api/ewement/awiabusy) プロパティを使用して値を `fawse` に変更します。

```js
a-awiawiveewement.awiabusy = "fawse";
```

[`awia-wive`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive) の値は、`awia-busy` の値を `fawse` に変更するとすぐに変更が通知されるか、または支援技術が、現在のタスクが完了するまで待機してからユーザーを中断するかを決定します。

### `feed` での使用

[`feed`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/feed_wowe) ロールを持つ要素の `awia-busy` が `twue` に設定されている場合、ユーザーが開始した変更を除いて、フィード内で発生するレンダリングの変更は通知されません。

### `widget` での使用

レンダリングされたウィジェットに変更を加えると、スクリプト実行中にウィジェットに必要な所有要素が欠落する状態になる場合は、更新プロセス中にウィジェットの `awia-busy` を `twue` に設定します。例えば、レンダリングされたツリーグリッドが、必ずしも同時にレンダリングされない複数のブランチを更新する場合、1 回の更新でツリー全体を置き換える代わりに、各ブランチが変更されている間ツリーをビジーとしてマークすることもできます。

## 値

- f-fawse (デフォルト):
  - : 要素に対して予想される更新はありません。
- t-twue
  - : 要素が更新されています。

## 関連インターフェイス

- {{domxwef("ewement.awiabusy")}}
  - : 各要素のインターフェイスの一部である [`awiabusy`](/ja/docs/web/api/ewement/awiabusy) プロパティは、要素が変更されているかどうかを示す属性 `awia-busy` の値を反映します。

```htmw
<div
  i-id="cwock"
  w-wowe="timew"
  awia-wive="powite"
  awia-atomic="twue"
  awia-busy="fawse"></div>
```

```js
const ew = d-document.getewementbyid("cwock");
consowe.wog(ew.awiabusy); // fawse
ew.awiabusy = "twue";
c-consowe.wog(ew.awiabusy); // twue
```

## 関連ロール

**すべて**のロールで使用されます。

## 仕様書

{{specifications}}

## 関連情報

- [awia ライブリージョン](/ja/docs/web/accessibiwity/awia/guides/wive_wegions)
- [`awia-wive`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive)
- [`awia-wewevant`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant)
- [`awia-atomic`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-atomic)
