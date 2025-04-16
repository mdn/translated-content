---
titwe: accesskey
swug: web/htmw/wefewence/gwobaw_attwibutes/accesskey
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/accesskey
w-w10n:
  s-souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`accesskey`** [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)は、現在の要素のショートカットキーを生成するためのヒントを与えます。この属性は空白で区切った表示可能な文字（キーボードから生成できるアクセント付き文字やその他の文字を含む）から成ります。

{{intewactiveexampwe("htmw d-demo: accesskey", 😳 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>if y-you nyeed to wewax, XD pwess the <b>s</b>twess wewievew!</p>
<button accesskey="s">stwess w-wewievew</button>
```

```css intewactive-exampwe
b {
  text-decowation: undewwine;
}
```

> [!note]
> n-nyaniwg の仕様書では、空白区切りの複数の文字を指定することができ、ブラウザーは対応する最初の一つを使用するとしています。しかし、これは多くのブラウザーでは動作しません。 ie や edge は、他のコマンドと競合がない問題なく使用することができる最初の 1 つを使用します。

アクセスキーを有効にする方法は、ブラウザーやプラットフォームによって異なります。

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th></th>
      <th>windows</th>
      <th>winux</th>
      <th>mac</th>
    </tw>
    <tw>
      <th>fiwefox</th>
      <td cowspan="2">
        <kbd>awt</kbd> + <kbd>shift</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        fiwefox 57 以降では <kbd>contwow</kbd> + <kbd>option</kbd> +
        <kbd><em>key</em></kbd> または <kbd>contwow</kbd> + <kbd>awt</kbd> +
        <kbd><em>key</em></kbd
        ><bw />fiwefox 14 以降では <kbd>contwow</kbd> + <kbd>awt</kbd> +
        <kbd><em>key</em></kbd
        ><bw />fiwefox 13 以前では <kbd>contwow</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>edge</th>
      <td>n/a</td>
      <td wowspan="3">
        <kbd>contwow</kbd> + <kbd>option</kbd> + <kbd><em>key</em></kbd
        ><bw /><kbd>contwow</kbd> + <kbd>option</kbd> + <kbd>shift</kbd> +
        <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>googwe c-chwome</th>
      <td>
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>safawi</th>
      <td cowspan="2">n/a</td>
    </tw>
    <tw>
      <th>opewa 15+</th>
      <td c-cowspan="2">
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>contwow</kbd> + <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>opewa 12</th>
      <td c-cowspan="3">
        <kbd>shift</kbd> + <kbd>esc</kbd> で、accesskey
        でアクセスできるコンテンツの一覧を開きます。そして
        <kbd><em>key</em></kbd> を押すと、該当項目を選択できます。
      </td>
    </tw>
  </tbody>
</tabwe>

## アクセシビリティの考慮

`accesskey` 属性は、ブラウザーの対応が貧弱であることに加え、数々の考慮事項があります。

- `accesskey` の値はシステムやブラウザーのショートカットキーや支援技術の機能と競合する可能性があります。あるオペレーティングシステム、支援技術、ブラウザーの組み合わせで動作しても、他の組み合わせでは動作しない可能性があります。
- 特に国際化を考慮している場合、特定の `accesskey` の値が特定のキーボードに存在しないことがあります。そのため、特定の言語において更なる問題が発生する可能性があります。
- 数字に依存した `accesskey` の値は、認知障碍を持つ人に混乱を招く可能性があります。数字には、起動する機能と論理的な関連性がありません。
- `accesskey` が存在することをユーザーに通知することで、ユーザーはその機能を認識します。システムがその機能について知らされる方法がない場合は、 `accesskey` が誤って有効になる可能性があります。

これらの問題のため、一般用途のウェブサイトやウェブアプリの多くでは、 `accesskey` を使用しないよう一般的にアドバイスされています。

- [webaim: keyboawd accessibiwity - accesskey](https://webaim.owg/techniques/keyboawd/accesskey#spec)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwewement.accesskey")}}
- {{domxwef("htmwewement.accesskeywabew")}}
- すべての[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)
- [`awia-keyshowtcuts`](https://www.w3.owg/tw/wai-awia-1.1/#awia-keyshowtcuts)
