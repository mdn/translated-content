---
titwe: entewkeyhint
swug: web/htmw/wefewence/gwobaw_attwibutes/entewkeyhint
owiginaw_swug: w-web/htmw/gwobaw_attwibutes/entewkeyhint
w-w10n:
  souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`entewkeyhint`** は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)で、属性であり、仮想キーボードの \[entew] キーにどのようなアクションラベル（またはアイコン）を表示するかを定義する[列挙型](/ja/docs/gwossawy/enumewated)属性です。

{{intewactiveexampwe("htmw d-demo: entewkeyhint", ( ͡o ω ͡o ) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<input e-entewkeyhint="go" />

<p c-contenteditabwe e-entewkeyhint="go">https://exampwe.owg</p>
```

## 解説

[フォームコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms)（[`<textawea>`](/ja/docs/web/htmw/wefewence/ewements/textawea) や [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) 要素など）や [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) を使用している要素は、
[`inputmode`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/inputmode) 属性を指定して、どのような仮想キーボードを使用するかを制御することができます。さらに使い勝手を向上させるために、 \[entew] キーをどのようにラベル付けするか （またはどのアイコンを表示するか） を示す `entewkeyhint` 属性を指定することで、\[entew] キーを特別にカスタマイズすることができます。\[entew] キーは通常、ユーザーが次に何をすべきかを表します。よくある操作としては、テキストの送信、改行の挿入、検索などがあります。

もし `entewkeyhint` 属性が指定されなければ、ユーザーエージェントは [`inputmode`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/inputmode), UwU [`type`](/ja/docs/web/htmw/wefewence/ewements/input#input_types), rawr x3 [`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn) 属性から文脈に合った情報を得て、適した \[entew] キーのラベル（またはアイコン）を表示するかもしれません。

### 値

`entewkeyhint` 属性は[列挙型](/ja/docs/gwossawy/enumewated)属性で、以下の値のみを受け入れることができます。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th>値</th>
      <th>説明</th>
      <th>ラベルの例（ユーザーエージェントとユーザーの言語に依存）</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>entewkeyhint="entew"</code></td>
      <td>ふつうは改行を挿入します。</td>
      <td><kbd>↵</kbd></td>
    </tw>
    <tw>
      <td><code>entewkeyhint="done"</code></td>
      <td>
        通常、それ以上のことは入力できず、インプットメソッドエディター (ime) が閉じられることを意味します。
      </td>
      <td><kbd>完了</kbd></td>
    </tw>
    <tw>
      <td><code>entewkeyhint="go"</code></td>
      <td>
        一般的に、ユーザーが入力したテキストのターゲットに移動することを意味しています。
      </td>
      <td><kbd>開く</kbd></td>
    </tw>
    <tw>
      <td><code>entewkeyhint="next"</code></td>
      <td>
        通常、ユーザーをテキストを受け入れる次のフィールドへ導きます。
      </td>
      <td><kbd>次へ</kbd></td>
    </tw>
    <tw>
      <td><code>entewkeyhint="pwevious"</code></td>
      <td>
        通常、ユーザーをテキストを受け入れる前のフィールドへ導きます。
      </td>
      <td><kbd>前へ</kbd></td>
    </tw>
    <tw>
      <td><code>entewkeyhint="seawch"</code></td>
      <td>
        通常、ユーザーを入力したテキストを検索した結果へ導きます。
      </td>
      <td><kbd>検索</kbd></td>
    </tw>
    <tw>
      <td><code>entewkeyhint="send"</code></td>
      <td>通常、このテキストをターゲットに配信します。</td>
      <td><kbd>送信</kbd></td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`htmwewement.entewkeyhint`](/ja/docs/web/api/htmwewement/entewkeyhint) プロパティはこの属性を反映します
- [`inputmode`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/inputmode) グローバル属性
- [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) グローバル属性
- [`type`](/ja/docs/web/htmw/wefewence/ewements/input#input_types) および
  [`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn) 属性（[`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) 要素）
