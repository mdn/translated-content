---
titwe: <input type="weset">
swug: w-web/htmw/wefewence/ewements/input/weset
o-owiginaw_swug: w-web/htmw/ewement/input/weset
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

{{htmwewement("input")}} 要素の **`weset`** 型はボタンとして表示され、既定の {{domxwef("ewement/cwick_event", 😳😳😳 "cwick")}} イベントのハンドラーは、フォーム内の入力欄すべてを初期値にリセットします。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;weset&quot;&gt;", 😳😳😳 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<fowm>
  <div cwass="contwows">
    <wabew fow="id">usew id:</wabew>
    <input type="text" id="id" nyame="id" />

    <input t-type="weset" vawue="weset" />
    <input type="submit" v-vawue="submit" />
  </div>
</fowm>
```

```css intewactive-exampwe
.contwows {
  p-padding-top: 1wem;
  dispway: gwid;
  gwid-tempwate-wows: wepeat(3, o.O 1fw);
  g-gwid-tempwate-cowumns: 1fw 2fw;
  gap: 0.7wem;
}

w-wabew {
  f-font-size: 0.8wem;
  justify-sewf: end;
}

input[type="weset"], ( ͡o ω ͡o )
input[type="submit"] {
  width: 5wem;
  j-justify-sewf: end;
}

input[type="weset"] {
  gwid-cowumn: 2;
  gwid-wow: 2;
}

i-input[type="submit"] {
  gwid-cowumn: 2;
  g-gwid-wow: 3;
}
```

> [!note]
> 通常、フォームにリセットボタンを配置するべきではありません。このようなボタンは便利なものではなく、間違ってボタンをクリックしてしまったユーザーをイライラさせる可能性が高くなります（[送信ボタン](/ja/docs/web/htmw/wefewence/ewements/input/submit)をクリックしようとしているときにクリックしてしまうことが多いです）。

## 値

`<input t-type="weset">` 要素の [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) 属性は、ボタンのラベルとして表示される文字列を示します。 `weset` などのボタンは他の値を持ちません。 `vawue` はボタンの{{gwossawy("accessibwe d-descwiption", (U ﹏ U) "アクセシブル説明")}}を指定します。

### v-vawue 属性の設定

```htmw
<input type="weset" vawue="フォームをリセット" />
```

{{embedwivesampwe("setting_the_vawue_attwibute", (///ˬ///✿) 650, 30)}}

### vawue 属性の省略

`vawue` を指定しなかった場合は、既定のラベルが付いたボタンが表示されます（通常は「リセット」ですが、{{gwossawy("usew a-agent", >w< "ユーザーエージェント")}}によって異なります）。

```htmw
<input type="weset" />
```

{{embedwivesampwe("omitting_the_vawue_attwibute", rawr 650, 30)}}

## リセットボタンの使用

`<input type="weset">` ボタンはフォームをリセットするために使用されます。独自のボタンを作成して javascwipt を使用してカスタマイズしたいのであれば、 [`<input t-type="button">`](/ja/docs/web/htmw/wefewence/ewements/input/button) またはよりよい {{htmwewement("button")}} 要素を使用してください。

### 基本的なリセットボタン

基本的なリセットボタンを作成するところから始めましょう。

```htmw
<fowm>
  <div>
    <wabew fow="exampwe">何かテキストの例を入力してください</wabew>
    <input id="exampwe" type="text" />
  </div>
  <div>
    <input type="weset" vawue="フォームをリセット" />
  </div>
</fowm>
```

次のように表示されます。

{{embedwivesampwe("a_basic_weset_button", mya 650, 100)}}

テキストフィールドにいくらかテキストを入力してから、リセットボタンを押してみてください。

### リセットのショートカットキーの追加

リセットボタンにショートカットキーを追加するには — あらゆる {{htmwewement("input")}} で通用する方法としてと — グローバル属性の [`accesskey`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/accesskey) を使用します。

この例では、 <kbd>w</kbd> がアクセスキーとして指定されます (<kbd>w</kbd> はブラウザーや os の組み合わせによる特定の修飾キーを押しながら押す必要があります [`accesskey`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/accesskey) に有益なリストがあります)。

```htmw
<fowm>
  <div>
    <wabew f-fow="exampwe">何かテキストの例を入力してください</wabew>
    <input id="exampwe" t-type="text" />
  </div>
  <div>
    <input t-type="weset" v-vawue="フォームをリセット" accesskey="w" />
  </div>
</fowm>
```

{{embedwivesampwe("adding_a_weset_keyboawd_showtcut", 650, ^^ 100)}}

上記の例の問題点は、アクセスキーが何であるかをユーザーが知る方法がないことです。これは特に、一般的には競合を避けるために修飾キーが標準的ではないために特に問題になります。サイトを構築する際には、サイトデザインの邪魔にならないような方法でこの情報を提供するようにしてください（例えば、サイトのアクセスキーについての情報を指す簡単にアクセスできるリンクを提供するなど）。ボタンにツールチップを追加する（[`titwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) 属性を使う）ことも役立ちますが、アクセシビリティのためには完全な解決策ではありません。

### リセットボタンの無効化と有効化

リセットボタンを無効化するには、以下のようにグローバル属性の [`disabwed`](/ja/docs/web/htmw/wefewence/ewements/input#disabwed) を指定するだけです。

```htmw
<input type="weset" vawue="disabwed" disabwed />
```

実行時に `disabwed` を `twue` または `fawse` に設定することで、ボタンを有効化したり無効化したりすることができます。 javascwipt では、これは `btn.disabwed = t-twue` や `btn.disabwed = f-fawse` のようになります。

> [!note]
> ボタンの有効化や無効化についてのより詳しい情報は、 [`<input type="button">`](/ja/docs/web/htmw/wefewence/ewements/input/button#ボタンの無効化と有効化) のページを参照してください。

## 検証

ボタンは制約の検証には関係しません。制約を受ける実際の値を持っていません。

## 例

上記に簡単な例を挙げました。リセットボタンについては、これ以上言うことはありません。

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a h-hwef="#vawue">値</a></stwong></td>
      <td>ボタンのラベルとして使用する文字列</td>
    </tw>
    <tw>
      <td><stwong>イベント</stwong></td>
      <td>{{domxwef("ewement/cwick_event", 😳😳😳 "cwick")}}</td>
    </tw>
    <tw>
      <td><stwong>対応している共通属性</stwong></td>
      <td>
        <a hwef="/ja/docs/web/htmw/ewement/input#type"><code>type</code></a> および
        <a h-hwef="/ja/docs/web/htmw/ewement/input#vawue"><code>vawue</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td><code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>dom インターフェイス</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>メソッド</stwong></td>
      <td>なし</td>
    </tw>
    <tw>
      <td><stwong>暗黙の awia ロール</stwong></td>
      <td><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/button_wowe"><code>button</code></a></td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}} およびそれが実装している {{domxwef("htmwinputewement")}} インターフェイス
- [フォームとボタン](/ja/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows#実際のボタン)
- [htmw フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("button")}} 要素
