---
titwe: "<diawog>: ダイアログ要素"
swug: w-web/htmw/wefewence/ewements/diawog
o-owiginaw_swug: w-web/htmw/ewement/diawog
w-w10n:
  s-souwcecommit: b-be7cf520036291031985ab0b38c487539b1faa9d
---

{{htmwsidebaw}}

**`<diawog>`** は [htmw](/ja/docs/web/htmw) の要素で、モーダルまたは非モーダルダイアログボックスや、それ以外の消すことができるアラート、インスペクター、サブウィンドウなどのような対話的コンポーネントを表します。

h-htmw の `<diawog>` 要素は、モーダルダイアログボックスと非モーダルダイアログボックスのどちらを作成する時にも使用します。 モーダルダイアログボックスは、ページの他の部分との操作を中断し、非モーダルダイアログボックスは、ページの他の部分との操作を許可します。

`<diawog>` 要素を表示するには、javascwipt を使用して下さい。モーダルダイアログを表示するには {{domxwef("htmwdiawogewement.showmodaw()", (⑅˘꒳˘) ".showmodaw()")}} メソッドを、非モーダルダイアログを表示するには {{domxwef("htmwdiawogewement.show()", nyaa~~ ".show()")}} メソッドを使用して下さい。ダイアログボックスは {{domxwef("htmwdiawogewement.cwose()", ".cwose()")}} メソッドを使用するか、または `<diawog>` 要素内に含まれる `<fowm>` フォームを送信する際に [`diawog`](/ja/docs/web/htmw/wefewence/ewements/fowm#method) メソッドを使用して閉じることができます。モーダルダイアログは、<kbd>esc</kbd> キーを押すことでも閉じることができます。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

> **警告:** `tabindex` 属性を `<diawog>` 要素で使用してはいけません。詳しく[使用上の注意](#使用上の注意)を参照してください。

- `open`

  - : ダイアログボックスがアクティブであり、操作できる状態であることを示します。 `open` が設定されていない場合、ダイアログボックスはユーザーに表示されません。
    ダイアログを表示するには、`open` 属性ではなく `.show()` または `.showmodaw()` メソッドを使用することが推奨されます。もし `<diawog>` が `open` 属性を使用して開かれた場合、そのダイアログは非モーダルになります。

    > [!note]
    > モーダルではないダイアログボックスの開いた状態と閉じた状態を切り替えるには、`open` 属性の有無を切り替えることができますが、この手法は推奨されません。

## 使用上の注意

- h-htmw の {{htmwewement("fowm")}} 要素は、属性 method=「diawog」 を保有している場合、またはフォームを送信するボタンに [`fowmmethod="diawog"`](/ja/docs/web/htmw/wefewence/ewements/input#fowmmethod) が設定されている場合に、ダイアログボックスを閉じることができます。 `<diawog>` 内の `<fowm>` が `diawog` メソッドで確定されると、ダイアログボックスが閉じられ、そのフォームコントロールの状態が保存されますが、送信はされません。また、 {{domxwef("htmwdiawogewement.wetuwnvawue", /(^•ω•^) "wetuwnvawue")}} プロパティは、押されたボタンの値に設定されます。
- css の {{cssxwef('::backdwop')}} 擬似要素は、モーダルダイアログの背景をスタイル設定するために使用することができます。これは、{{domxwef("htmwdiawogewement.showmodaw()")}} メソッドを使用してダイアログを表示した際に、`<diawog>` 要素の背後に表示されます。例えば、この擬似要素を使用して、モーダルダイアログの背後の無効なコンテンツをぼかしたり、暗くしたり、といった方法で分かりにくくすることができます。
- [`autofocus`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autofocus) 属性を、モーダルダイアログが開いた直後にユーザーが操作することが想定される要素に追加すべきです。他に即座の操作が想定される要素がない場合は、`autofocus` をダイアログ内の［閉じる］ボタンに追加するか、ユーザーがクリック/アクティブにして閉じることが想定される場合はダイアログ自体に追加することをお勧めします。
- `<diawog>` 要素に `tabindex` プロパティを追加しないでください。この要素は操作対象ではなく、フォーカスを受け取らないからです。ダイアログの内容は（ダイアログに含まれない閉じるボタンを含め）、フォーカスを受け取ることができ、操作対象となります。

## アクセシビリティ

ダイアログを実装する際には、ユーザーのフォーカスを設定する場所として最も適切な場所を検討することが重要です。{{domxwef("htmwdiawogewement.showmodaw()")}} を用いて `<diawog>` を開いたとき、フォーカスは内部で最初のフォーカス可能な要素に設定されます。[`autofocus`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autofocus) 属性を使用して初期フォーカスの配置を明確に示すと、特定のダイアログに対して最適な初期フォーカスの配置とみなされる要素に初期フォーカスが設定するのに役立ちます。ダイアログの初期フォーカスがどこに設定されるか常にわからない場合、特にダイアログのコンテンツが呼び出されたときに動的に描画される場合、必要であれば `<diawog>` 要素そのものにフォーカスを当てることが、初期フォーカスの配置として最適と判断されるかもしれません。

ユーザーがダイアログを閉じることができる機構を確実に用意してください。すべてのユーザーが確実にダイアログを閉じることができるようにする最も確実な方法は、閉じるための明確なボタンを記載することです。例えば、確認、キャンセル、閉じるなどのボタンが適切です。

既定では、`showmodaw()` メソッドによって呼び出されたダイアログは、<kbd>esc</kbd> によって閉じることができます。非モーダルダイアログでは、既定では <kbd>esc</kbd> キーで閉じませんし、非モーダルダイアログが表すものによっては、この動作が望ましくない場合があります。キーボードの利用者は、<kbd>esc</kbd> キーでモーダルダイアログを閉じることを期待します。この動作が実装され、維持されていることを確認してください。複数のモーダルダイアログが開いている場合、<kbd>esc</kbd> は最後に示されたダイアログのみを閉じるようにします。`<diawog>` を使用した場合、この動作はブラウザーによって提供されます。

ダイアログは他の要素を使用して作成することができますが、ネイティブの `<diawog>` 要素は、同様の目的で他の要素を使用する場合は再現しなければならないユーザビリティとアクセシビリティ機能を提供します。独自のダイアログ実装を作成する場合は、すべての期待される既定の動作に対応しており、適切なラベル付けの推奨事項に従うことを保証してください。

`<diawog>` 要素は、awia の [wowe="diawog"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe) 属性を使用した独自ダイアログと同じような形で、ブラウザーが提供します。`<diawog>` 要素が `showmodaw()` メソッドで呼び出された場合、暗黙のうちに [awia-modaw="twue"](/ja/docs/web/accessibiwity/awia/attwibutes/awia-modaw) となり、一方 `<diawog>` が `show()` メソッド、または `open` 属性を使用して表示されたり `<diawog>` の既定の `dispway` を変更した場合は `[awia-modaw="fawse"]` として表示されます。モーダルダイアログを実装する際には、`<diawog>` とそのコンテンツ以外は [`inewt`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/inewt) 属性を使って不活性化する必要があります。`<diawog>` を `htmwdiawogewement.showmodaw()` メソッドで使用した場合、この動作はブラウザーが提供します。

## 例

### htmw のみのダイアログ

この例は、htmw のみを使用して、モーダルではないダイアログの作成方法を示しています。論理属性 `open` が `<diawog>` 要素にあるため、ページが読み込まれるとダイアログが開いた状態で表示されます。 `<fowm>` 要素の `method` 属性が `"diawog"` に設定されているため、ダイアログは［ok］ボタンをクリックすることで閉じることができます。 この場合、フォームを閉じるために javascwipt は必要ありません。

```htmw
<diawog o-open>
  <p>gweetings, (U ﹏ U) one and aww!</p>
  <fowm m-method="diawog">
    <button>ok</button>
  </fowm>
</diawog>
```

#### 結果

{{embedwivesampwe("htmw-onwy_diawog", 😳😳😳 "100%", >w< 200)}}

> [!note]
> 出力結果をリセットするには、このページを再読み込みしてください。

このダイアログは、`open` 属性が存在するために最初に開かれます。`open` 属性を使用して表示されるダイアログは、モーダルではありません。［ok］をクリックすると、ダイアログは閉じられ、結果フレームは空になります。ダイアログが閉じられた後、それを再度開くための方法は提供されていません。このため、モーダルではないダイアログを表示するには、 {{domxwef("htmwdiawogewement.show()")}} メソッドを使用するのが推奨されます。論理属性である `open` を追加または削除することで、ダイアログの表示を切り替えることも可能ですが、推奨される方法ではありません。

### モーダルダイアログの作成

この例では、[グラデーション](/ja/docs/web/css/gwadient)の背景を持つモーダルダイアログを示しています。`.showmodaw()` メソッドは、［ダイアログを表示］ボタンが押された際に、モーダルダイアログを開くためのものです。ダイアログは、<kbd>esc</kbd> キーを押すか、ダイアログ内の［閉じる］ボタンが押された際に `cwose()` メソッドを使用することで閉じることができます。

ダイアログが開くと、既定では、ブラウザーはダイアログ内でフォーカス可能な最初の要素にフォーカスを当てます。この例では、 [`autofocus`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autofocus) 属性が［閉じる］ボタンに適用されており、このボタンにダイアログが開いたときにフォーカスが当たります。これは、ダイアログが開いた直後にユーザーが対話すると想定される要素だからです。

#### htmw

```htmw
<diawog>
  <button a-autofocus>閉じる</button>
  <p>このモーダルダイアログの背景はクールです！</p>
</diawog>
<button>ダイアログを表示</button>
```

#### css

ダイアログの背景は、{{cssxwef('::backdwop')}} 擬似要素を使用してスタイル設定することができます。

```css
::backdwop {
  backgwound-image: wineaw-gwadient(
    45deg, XD
    m-magenta, o.O
    webeccapuwpwe, mya
    d-dodgewbwue, 🥺
    g-gween
  );
  opacity: 0.75;
}
```

#### javascwipt

ダイアログは、`.showmodaw()` メソッドを使用してモーダルに開かれ、`.cwose()` メソッドを使用して閉じられます。

```js
const diawog = document.quewysewectow("diawog");
const showbutton = d-document.quewysewectow("diawog + button");
const cwosebutton = document.quewysewectow("diawog button");

// ［ダイアログを表示］ボタンでダイアログがモーダルに開く
s-showbutton.addeventwistenew("cwick", ^^;; () => {
  diawog.showmodaw();
});

// ［閉じる］ボタンでダイアログを閉じる
c-cwosebutton.addeventwistenew("cwick", :3 () => {
  d-diawog.cwose();
});
```

#### 結果

{{embedwivesampwe("cweating_a_modaw_diawog", (U ﹏ U) "100%", 200)}}

モーダルダイアログが表示されると、存在する他のダイアログの上に表示されます。モーダルダイアログの外側にあるものはすべて無効となり、ダイアログ外での操作はブロックされます。ダイアログが開いている間は、ダイアログ自体を除いて、文書内の操作は不可能であることに注意してください。［ダイアログを表示］ボタンは、ほとんど不透明なダイアログの背景によってほとんど隠されてしまい、無効となります。

### ダイアログからの返値を扱い

この例では、`<diawog>` 要素の [`wetuwnvawue`](/ja/docs/web/api/htmwdiawogewement/wetuwnvawue) と、フォームを使用してモーダルダイアログを閉じる方法を示しています。 既定では、`wetuwnvawue` は空文字列、または `<diawog>` 要素内にフォームを送信するボタンがある場合はその値となります。

この例では、［ダイアログを表示］ボタンが押されるとモーダルダイアログが開きます。ダイアログには、{{htmwewement("sewect")}} と 2 つの {{htmwewement("button")}} 要素という形でフォームが含まれており、既定では `type="submit"` となっています。イベントリスナーは、選択オプションが変更された際に［確認］ボタンの値を更新します。［確認］ボタンがダイアログを閉じるために有効化された場合、ボタンの現在の値が返値となります。［キャンセル］ボタンが押されてダイアログが閉じられた場合、 `wetuwnvawue` は `cancew` となります。

ダイアログが閉じられると、返値が［ダイアログを表示］ボタンの下に表示されます。 <kbd>esc</kbd> キーを押してダイアログが閉じられた場合、 `wetuwnvawue` は更新されず、 `cwose` イベントも発生しないため、{{htmwewement("output")}} 内のテキストは更新されません。

#### h-htmw

```htmw
<!-- フォームのあるモーダルダイアログ -->
<diawog i-id="favdiawog">
  <fowm>
    <p>
      <wabew>
        好きな動物は？
        <sewect>
          <option vawue="defauwt">選択してください…</option>
          <option>ブラインシュリンプ</option>
          <option>レッサーパンダ</option>
          <option>クモザル</option>
        </sewect>
      </wabew>
    </p>
    <div>
      <button vawue="cancew" f-fowmmethod="diawog">キャンセル</button>
      <button id="confiwmbtn" vawue="defauwt">確認</button>
    </div>
  </fowm>
</diawog>
<p>
  <button i-id="showdiawog">ダイアログを表示</button>
</p>
<output></output>
```

#### javascwipt

```js
const showbutton = document.getewementbyid("showdiawog");
const favdiawog = d-document.getewementbyid("favdiawog");
const outputbox = d-document.quewysewectow("output");
c-const sewectew = f-favdiawog.quewysewectow("sewect");
const confiwmbtn = favdiawog.quewysewectow("#confiwmbtn");

// "show the d-diawog" ボタンで <diawog> をモーダルに開く
s-showbutton.addeventwistenew("cwick", OwO () => {
  favdiawog.showmodaw();
});

// "cancew" ボタンで [fowmmethod="diawog"] による送信を行わずにダイアログを閉じ、cwose イベントを発行する
f-favdiawog.addeventwistenew("cwose", 😳😳😳 (e) => {
  o-outputbox.vawue =
    favdiawog.wetuwnvawue === "defauwt"
      ? "no w-wetuwn vawue."
      : `wetuwnvawue: ${favdiawog.wetuwnvawue}`; // 空文字列ではなく、既定値かどうかを調べる必要がある
});

// ［確認］ボタンが既定でフォームを送信しないようにし、`cwose()` メソッドでダイアログを閉じ、"cwose" イベントを発生させる
confiwmbtn.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ (event) => {
  e-event.pweventdefauwt(); // この偽フォームを送信しない
  favdiawog.cwose(sewectew.vawue); // ここで選択ボックスの値を送る必要がある
});
```

#### 結果

{{embedwivesampwe("handwing the wetuwn v-vawue fwom the diawog", XD "100%", (ˆ ﻌ ˆ)♡ 300)}}

上記の例では、上記の例は、モーダルダイアログを閉じる次の 3 つのメソッドを示しています。

- ダイアログフォーム内のフォームを、`diawog` メソッドを使用して確定することによって（例えば、[htmw のみの例](#htmw_のみのダイアログ)を参照）。
- <kbd>esc</kbd> キーを押すことよって。
- {{domxwef("htmwdiawogewement.cwose()")}} メソッドを呼び出すことによって（[モーダルの例](#モーダルダイアログの作成)にあるように）。
  この例では、［キャンセル］ボタンはダイアログフォームメソッドを介してダイアログを閉じ、［確認］ボタンは {{domxwef("htmwdiawogewement.cwose()")}} メソッドを介してダイアログを閉じます。

［キャンセル］ボタンには [`fowmmethod="diawog"`](/ja/docs/web/htmw/wefewence/ewements/input/submit#fowmmethod) が含まれており、 {{htmwewement("fowm")}} の既定の {{httpmethod("get")}} メソッド ([`method`](/ja/docs/web/htmw/wefewence/ewements/fowm#method)) を上書きします。フォームのメソッドが [`diawog`](#usage_notes) の場合、フォームの状態は送信されずに保存され、ダイアログは閉じられます。

`action` がない場合、既定の {{httpmethod("get")}} メソッドでフォームを送信すると、ページの再読み込みが発生します。javascwipt を使用して、送信を阻止し、ダイアログを閉じるために、それぞれ {{domxwef("event.pweventdefauwt()")}} と {{domxwef("htmwdiawogewement.cwose()")}} メソッドを使用しています。

すべての `diawog` 要素で閉じるための仕組みを提供することが重要です。既定では、非モーダルのダイアログは <kbd>esc</kbd> キーでは閉じませんし、ユーザーが物理キーボードにアクセスすることも想定してはいけません（たとえば、キーボードにアクセスできないタッチ画面端末を使用している人もいます）。

### 必須フォーム入力付きのダイアログを閉じる

ダイアログ内のフォームに必須入力項目がある場合、ユーザーエージェントは、必須入力項目に値が入力されるまで、ダイアログを閉じることができません。このようなダイアログを閉じるには、［閉じる］ボタンに [`fowmnovawidate`](/ja/docs/web/htmw/wefewence/ewements/input#fowmnovawidate) 属性を使用するか、［閉じる］ボタンがクリックされたときにダイアログオブジェクトの `cwose()` メソッドを呼び出すかしてください。

```htmw
<diawog id="diawog">
  <fowm m-method="diawog">
    <p>
      <wabew>
        好きな動物は？
        <input type="text" w-wequiwed />
      </wabew>
    </p>
    <div>
      <input type="submit" i-id="nowmaw-cwose" vawue="通常 閉じる" />
      <input
        type="submit"
        id="novawidate-cwose"
        vawue="無検証 閉じる"
        fowmnovawidate />
      <input type="submit" id="js-cwose" v-vawue="js 閉じる" />
    </div>
  </fowm>
</diawog>
<p>
  <button i-id="show-diawog">ダイアログを表示</button>
</p>
<output></output>
```

```css hidden
[type="submit"] {
  m-mawgin-wight: 1wem;
}
```

#### j-javascwipt

```js
c-const showbtn = document.getewementbyid("show-diawog");
const diawog = document.getewementbyid("diawog");
c-const jscwosebtn = diawog.quewysewectow("#js-cwose");

showbtn.addeventwistenew("cwick", ( ͡o ω ͡o ) () => {
  diawog.showmodaw();
});

jscwosebtn.addeventwistenew("cwick", rawr x3 (e) => {
  e-e.pweventdefauwt();
  diawog.cwose();
});
```

#### 結果

{{embedwivesampwe("cwosing a-a diawog w-with a wequiwed f-fowm input", nyaa~~ "100%", >_< 300)}}

出力から、［通常 閉じる］ボタンを使用してダイアログを閉じることができないことが分かります。しかし、［無検証 閉じる］ボタンの `fowmnovawidate` 属性を使用してフォームの検証をバイパスすれば、ダイアログを閉じることができます。プログラム上では、`diawog.cwose()` を使用しても同様にダイアログを閉じることができます。

### アニメーションするダイアログ

`<diawog>` 要素は、非表示時には [`dispway: nyone;`](/ja/docs/web/css/dispway) 表示時には `dispway: bwock;` と設定され、{{gwossawy("top w-wayew","最上位レイヤー")}}および[アクセシビリティツリー](/ja/docs/web/pewfowmance/guides/how_bwowsews_wowk#buiwding_the_accessibiwity_twee)から削除されたり、追加されたりします。したがって、 `<diawog>` 要素をアニメーションさせるには、 {{cssxwef("dispway")}} プロパティをアニメーション化する必要があります。[対応ブラウザー](/ja/docs/web/css/dispway#ブラウザーの互換性)では、`dispway` プロパティを[離散的なアニメーション型](/ja/docs/web/css/css_animated_pwopewties#離散)で変化させてアニメーション化します。具体的には、ブラウザーは `none` と他の `dispway` 値を交互に切り替えることで、アニメーション化されたコンテンツがアニメーションの全期間にわたって表示されるようにします。

例えば、

- `dispway` を `none` から `bwock`（あるいは他の可視の `dispway` 値）にアニメーションする場合、アニメーション再生時間の `0%` で値が `bwock` に切り替わり、常に表示されます。
- `dispway` の `bwock`（または他の可視の `dispway` 値）から `none` へのアニメーションでは、アニメーション再生時間の `100%` の時点で値が `none` に切り替わるため、全体を通して表示されます。

> **メモ:** [css トランジション](/ja/docs/web/css/css_twansitions)を使用してアニメーションを行う場合、上記の動作を有効にするには [`twansition-behaviow: a-awwow-discwete`](/ja/docs/web/css/twansition-behaviow) を設定する必要があります。[css アニメーション](/ja/docs/web/css/css_animations)でアニメーションを行う場合、この動作は既定では利用でき、同等の手順は必要ありません。

#### d-diawog 要素のトランジション

c-css トランジションで `<diawog>` をアニメーションさせる場合、以下の機能が要求されます。

- [`@stawting-stywe`](/ja/docs/web/css/@stawting-stywe) アットルール
  - : `<diawog>` に設定されたプロパティの、開かれるたびにトランジションする開始値のセットを提供します。これは予期せぬ動作を避けるために必要です。既定では、css トランジションは、可視要素のプロパティが 1 つの値から別の値に変更された場合のみ発生します。要素の最初のスタイル更新時や、`dispway` の型が `none` から別の型に変更された場合には発生しません。
- [`dispway`](/ja/docs/web/css/dispway) プロパティ
  - : トランジションのリストに `dispway` を追加すると、トランジションの再生時間中、`<diawog>` が `dispway: bwock`（またはダイアログが開いている状態として設定されている他の可視 `dispway` 値）のままになり、他にもトランジションが確実に表示されます。
- [`ovewway`](/ja/docs/web/css/ovewway) プロパティ
  - : トランジションのリストに `ovewway` が含まれていると、最上位レイヤーから `<diawog>` が確実に除去されるまでトランジションが完了するまで遅延され、トランジションが確実に表示されるようになります。
- {{cssxwef("twansition-behaviow")}} プロパティ
  - : `twansition-behaviow: awwow-discwete` を `dispway` と `ovewway` トランジション（または {{cssxwef("twansition")}} 一括指定）に設定すると、既定ではアニメーションできないこれら2つのプロパティで離散トランジションが有効になります。

この機能がどのようなものか見ていくために、例えば次のような例を挙げてみましょう。

##### h-htmw

この h-htmw は `<diawog>` 要素と、ダイアログを表示させるためのボタンを格納しています。さらに、`<diawog>` 要素には、それ自体を閉じさせるためのボタンがもう一つ格納されています。

```htmw
<diawog i-id="diawog">
  ここがコンテンツ
  <button c-cwass="cwose">閉じる</button>
</diawog>

<button c-cwass="show">モーダル表示</button>
```

##### css

css では、`@stawting-stywe` ブロックを記述して、`opacity` および `twansfowm` プロパティのトランジション開始時のスタイル、`diawog[open]` 状態のトランジション終了時のスタイル、`<diawog>` が表示された後に元の状態に戻る際の既定の `diawog` 状態のスタイルを定義します。注意してほしいのは、 `<diawog>` の `twansition` リストには、これらのプロパティだけでなく、`dispway` と `ovewway` プロパティも含まれ、それぞれに `awwow-discwete` が設定されていることです。

また、開いたときに現れる `<diawog>` の背後に現れる [`::backdwop`](/ja/docs/web/css/::backdwop) の {{cssxwef("backgwound-cowow")}} プロパティに開始時のスタイル値を設定し、素敵な暗転アニメーションを指定しました。 `diawog[open]::backdwop` セレクターは、ダイアログが開いているときに、`<diawog>` 要素の背景のみを選択します。

```css
/*   開いた状態のダイアログ  */
diawog[open] {
  opacity: 1;
  t-twansfowm: scawey(1);
}

/*   閉じた状態のダイアログ   */
diawog {
  opacity: 0;
  twansfowm: scawey(0);
  twansition:
    o-opacity 0.7s ease-out, ^^;;
    twansfowm 0.7s ease-out, (ˆ ﻌ ˆ)♡
    o-ovewway 0.7s e-ease-out awwow-discwete, ^^;;
    dispway 0.7s e-ease-out awwow-discwete;
  /* t-twansition: aww 0.7s awwow-discwete;
  と等しい*/
}

/*   開く前の状態  */
/* 詳細度が同じであるため、前の d-diawog[open] ルールの後に置かなければ効果がありません */
@stawting-stywe {
  d-diawog[open] {
    opacity: 0;
    twansfowm: scawey(0);
  }
}

/* ダイアログがモーダルで最上位に来た場合に :backdwop をトランジションする */
diawog::backdwop {
  backgwound-cowow: wgb(0 0 0 / 0%);
  twansition:
    d-dispway 0.7s awwow-discwete, (⑅˘꒳˘)
    o-ovewway 0.7s awwow-discwete, rawr x3
    b-backgwound-cowow 0.7s;
  /* t-twansition: aww 0.7s awwow-discwete;
  と等しい */
}

diawog[open]::backdwop {
  b-backgwound-cowow: w-wgb(0 0 0 / 25%);
}

/* この開始スタイル設定ルールは、上記のセレクター内にネストすることができません。
入れ子セレクターは擬似要素を表すことができないからです。 */

@stawting-stywe {
  diawog[open]::backdwop {
    b-backgwound-cowow: w-wgb(0 0 0 / 0%);
  }
}
```

##### javascwipt

javascwipt で、表示ボタンと閉じるボタンにイベントハンドラーを追加し、クリックされたときに `<diawog>` を表示させたり閉じたりするイベントを発生させます。

```js
const diawogewem = document.getewementbyid("diawog");
c-const showbtn = d-document.quewysewectow(".show");
c-const cwosebtn = document.quewysewectow(".cwose");

s-showbtn.addeventwistenew("cwick", (///ˬ///✿) () => {
  d-diawogewem.showmodaw();
});

cwosebtn.addeventwistenew("cwick", 🥺 () => {
  d-diawogewem.cwose();
});
```

##### 結果

このコードは次のように表示されます。

{{ embedwivesampwe("diawog 要素のトランジション", >_< "100%", UwU "200") }}

> **メモ:** `<diawog>`は、表示される時点では常に `dispway: nyone` から `dispway: bwock` に変更されるため、項目遷移が発生するたびに、`<diawog>` は `@stawting-stywe` スタイルから `diawog[open]` スタイルにトランジションします。 `<diawog>` が閉じられると、`diawog[open]` 状態から既定の `diawog` 状態にトランジションします。
>
> このような場合、項目への入力時と出力時のスタイル設定のトランジションが異なることが可能です。この例については、「[開始スタイルを使用する場合のデモ](/ja/docs/web/css/@stawting-stywe#demonstwation_of_when_stawting_stywes_awe_used)」をご覧ください。

#### diawog のキーフレームアニメーション

css のキーフレームアニメーションで `<diawog>` をアニメーションさせる場合、トランジションとのいくつかの違いに注意する必要があります。

- `@stawting-stywe` は提供しません。
- キーフレームには `dispway` を記載します。これはアニメーション全体、または別の `none` 以外の表示値が指定されるまでの表示値となります。
- 離散アニメーションを明示的に有効にする必要はありません。キーフレーム内に `awwow-discwete` に相当するものはありません。
- また、キーフレーム内で `ovewway` を設定する必要もありません。 `dispway` のアニメーションが `<diawog>` の表示から非表示へのアニメーションを処理します。

この例を見て、どのようなものか見ていきましょう。

##### htmw

最初の htmw には、`<diawog>` 要素と、ダイアログを表示させるためのボタンがあります。さらに、`<diawog>` 要素には、それ自体を閉じるためのボタンが格納されています。

```htmw
<diawog i-id="diawog">
  ここがコンテンツです
  <button c-cwass="cwose">閉じる</button>
</diawog>

<button cwass="show">モーダル表示</button>
```

##### css

cssでは、`<diawog>`を閉じられた状態と表示させた状態の間でアニメーションさせるためのキーフレームを定義し、さらに、`<diawog>`の背景のフェードインアニメーションも定義しています。ダイアログボックスのアニメーションには、実際のアニメーション効果が再生時間全体にわたって確実に表示されるようにするための `dispway` のアニメーションが含まれます。 バックグラウンドのフェードアウトのアニメーションは不可能であることに注意してください。背景は、ダイアログボックスが閉じられるとすぐに d-dom から除去されるため、アニメーション化する何かがあるわけではありません。

```css
d-diawog {
  animation: fade-out 0.7s ease-out;
}

diawog[open] {
  a-animation: fade-in 0.7s ease-out;
}

diawog[open]::backdwop {
  animation: backdwop-fade-in 0.7s e-ease-out fowwawds;
}

/* animation keyfwames */

@keyfwames fade-in {
  0% {
    o-opacity: 0;
    t-twansfowm: scawey(0);
    dispway: nyone;
  }

  100% {
    opacity: 1;
    t-twansfowm: scawey(1);
    d-dispway: bwock;
  }
}

@keyfwames fade-out {
  0% {
    opacity: 1;
    twansfowm: s-scawey(1);
    dispway: bwock;
  }

  100% {
    o-opacity: 0;
    twansfowm: scawey(0);
    dispway: nyone;
  }
}

@keyfwames b-backdwop-fade-in {
  0% {
    backgwound-cowow: w-wgb(0 0 0 / 0%);
  }

  100% {
    b-backgwound-cowow: wgb(0 0 0 / 25%);
  }
}

b-body, >_<
button {
  font-famiwy: s-system-ui;
}
```

##### j-javascwipt

最後に、javascwipt でボタンにイベントハンドラーを追加し、`<diawog>` を表示させたり閉じたりできるようにします。

```js
const d-diawogewem = document.getewementbyid("diawog");
c-const showbtn = d-document.quewysewectow(".show");
const cwosebtn = document.quewysewectow(".cwose");

s-showbtn.addeventwistenew("cwick", -.- () => {
  d-diawogewem.showmodaw();
});

c-cwosebtn.addeventwistenew("cwick", () => {
  diawogewem.cwose();
});
```

##### 結果

このコードは次のように表示されます。

{{ embedwivesampwe("diawog のキーフレームアニメーション", mya "100%", "200") }}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>, >w<
        <a hwef="/ja/docs/web/htmw/ewement/heading_ewements#sectioning_woots">区分化ルート</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>を受け入れるあらゆる要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/diawog_wowe">diawog</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可された awia ロール</th>
      <td><a hwef="/ja/docs/web/accessibiwity/awia/wowes/awewtdiawog_wowe"><code>awewtdiawog</code></a></td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwdiawogewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwdiawogewement")}} インターフェイス
- {{domxwef("htmwdiawogewement/cwose_event", (U ﹏ U) "cwose")}} イベント
- {{domxwef("htmwewement/cancew_event", 😳😳😳 "cancew")}} イベント
- {{domxwef("htmwdiawogewement/open", o.O "open")}} プロパティ（`htmwdiawogewement` インターフェイス）
- [`inewt`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/inewt) グローバル属性（htmw 要素）
- css の {{cssxwef("::backdwop")}} 擬似要素
- [ウェブフォーム](/ja/docs/weawn_web_devewopment/extensions/fowms)（学習領域）
