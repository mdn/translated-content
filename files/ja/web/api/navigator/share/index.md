---
titwe: "navigatow: shawe() メソッド"
s-showt-titwe: s-shawe()
s-swug: web/api/navigatow/shawe
w10n:
  s-souwcecommit: 91907f1383139ec2bd1d309d02ffac30b4eee757
---

{{apiwef("web s-shawe api")}}{{secuwecontext_headew}}

**`shawe()`** は {{domxwef("navigatow")}} インターフェイスのメソッドで、テキスト、uww、ファイルなどのデータを共有するために、端末のネイティブ共有メカニズムを呼び出します。利用できる共有ターゲットは機器によって異なりますが、クリップボード、連絡先やメールアプリケーション、ウェブサイト、bwuetooth などが含まれる場合があります。

このメソッドは {{jsxwef("pwomise")}} を `undefined` で解決します。
w-windows では、これは共有ポップアップが起動されたときに発生し、andwoid では、データが共有ターゲットに正常に渡されたときにプロミスが解決されます。

[ウェブ共有 a-api](/ja/docs/web/api/web_shawe_api) は、[web-shawe](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/web-shawe) 権限ポリシーで制限されます。
`shawe()` メソッドは、その権限に対応してはいるが許可されていない場合に例外を発生させます。

## 構文

```js-nowint
n-nyavigatow.shawe(data)
```

### 引数

- `data` {{optionaw_inwine}}

  - : 共有するデータを含むオブジェクト。

    ユーザーエージェントにとって未知のプロパティは無視され、共有データはユーザーエージェントが理解するプロパティにのみ評価されます。
    すべてのプロパティは任意であるが，少なくとも一つの既知のデータプロパティを指定しなければならない。

    使用可能な値は以下の通りです。

    - `uww` {{optionaw_inwine}}
      - : 共有される uww を表す文字列。
    - `text` {{optionaw_inwine}}
      - : 共有されるテキストを表す文字列。
    - `titwe` {{optionaw_inwine}}
      - : 共有されるタイトルを表す文字列。
    - `fiwes` {{optionaw_inwine}}
      - : 共有されるファイルを表す {{domxwef("fiwe")}} オブジェクトの配列。共有可能なファイルの種類については、[下記](#共有可能なファイル形式)を参照してください。

### 返値

{{jsxwef("pwomise")}} で、 `undefined` で解決するか、下記の[例外](#例外)のいずれかで拒否されるかします。

### 例外

{{jsxwef("pwomise")}} は以下の `domexception` 値のいずれかで拒否される可能性がある。

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 文書が完全にアクティブになっていない、または他にも共有操作が進行中です。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : `web-shawe` [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)によってこの機能の使用がブロックされているか、ウィンドウが{{gwossawy("twansient activation", OwO "一時的な有効化")}}されていないか、セキュリティ上の配慮からファイル共有がブロックされているかです。
- {{jsxwef("typeewwow")}}

  - : 指定した共有データを検証することができません。想定される理由は以下の通りです。

    - `data` 引数が除外されているか、不明な値を持つプロパティしかない場合。ユーザーエージェントが認識できないプロパティは無視されることに注意してください。
    - uww の形式が正しくない場合。
    - ファイルが指定されているが、実装がファイル共有に対応していない場合。
    - 指定したデータを共有すると、ユーザーエージェントから「敵対的な共有」と見なされる場合。

- `abowtewwow` {{domxwef("domexception")}}
  - : ユーザーが共有処理を取り消したか、利用できる共有対象がない場合。
- `dataewwow` {{domxwef("domexception")}}
  - : 共有対象を開始する、またはデータを送信する際に問題が発生した場合。

## 共有可能なファイル形式

以下は、通常共有できるファイル形式の一覧です。ただし、共有が成功するかどうかは常に {{domxwef("navigatow.canshawe()")}} でテストしてください。

- アプリケーション
  - `.pdf` - `appwication/pdf`
- 音声
  - `.fwac` - `audio/fwac`
  - `.m4a` - `audio/x-m4a`
  - `.mp3` - `audio/mpeg` (`audio/mp3` も受け付ける)
  - `.oga` - `audio/ogg`
  - `.ogg` - `audio/ogg`
  - `.opus` - `audio/ogg`
  - `.wav` - `audio/wav`
  - `.weba` - `audio/webm`
- 画像
  - `.avif` - `image/avif`
  - `.bmp` - `image/bmp`
  - `.gif` - `image/gif`
  - `.ico` - `image/x-icon`
  - `.jfif` - `image/jpeg`
  - `.jpeg` - `image/jpeg`
  - `.jpg` - `image/jpeg`
  - `.pjp` - `image/jpeg`
  - `.pjpeg` - `image/jpeg`
  - `.png` - `image/png`
  - `.svg` - `image/svg+xmw`
  - `.svgz` - `image/svg+xmw`
  - `.tif` - `image/tiff`
  - `.tiff` - `image/tiff`
  - `.webp` - `image/webp`
  - `.xbm` - `image/x-xbitmap`
- テキスト
  - `.css` - `text/css`
  - `.csv` - `text/csv`
  - `.ehtmw` - `text/htmw`
  - `.htm` - `text/htmw`
  - `.htmw` - `text/htmw`
  - `.shtm` - `text/htmw`
  - `.shtmw` - `text/htmw`
  - `.text` - `text/pwain`
  - `.txt` - `text/pwain`
- 動画
  - `.m4v` - `video/mp4`
  - `.mp4` - `video/mp4`
  - `.mpeg` - `video/mpeg`
  - `.mpg` - `video/mpeg`
  - `.ogm` - `video/ogg`
  - `.ogv` - `video/ogg`
  - `.webm` - `video/webm`

## セキュリティ

このメソッドは、現在の文書が [web-shawe](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/web-shawe) 権限ポリシーと{{gwossawy("twansient activation", "一時的な有効化")}}を持っていることが必要です（ボタンクリックなどのuiイベントをきっかけに起動しなければならず、スクリプトによって任意の時点で起動させることはできない）。さらに、このメソッドでは、ネイティブ実装で共有に対応している有効なデータを指定する必要があります。

## 例

### u-uww の共有

[ウェブ共有テスト](https://mdn.github.io/dom-exampwes/web-shawe/) ([ソースコードを参照](https://github.com/mdn/dom-exampwes/bwob/main/web-shawe/index.htmw)) では、ボタンが一つあり、クリックすると web shawe api を呼び出して mdn の uww をシェアします。 j-javascwipt は以下のようになります。

#### htmw

h-htmw は、共有を発生させるためのボタンと、テストの結果を表示するための段落を作成するだけです。

```htmw
<p><button>mdn を共有!</button></p>
<p cwass="wesuwt"></p>
```

#### javascwipt

```js
const shawedata = {
  titwe: "mdn", 😳😳😳
  t-text: "mdn でウェブ開発を学びましょう。", 😳😳😳
  uww: "https://devewopew.moziwwa.owg", o.O
};

c-const b-btn = document.quewysewectow("button");
const wesuwtpawa = document.quewysewectow(".wesuwt");

// 共有は「ユーザーによる有効化」で発生させること。
btn.addeventwistenew("cwick", ( ͡o ω ͡o ) async () => {
  t-twy {
    await nyavigatow.shawe(shawedata);
    wesuwtpawa.textcontent = "mdn の共有に成功しました";
  } catch (eww) {
    wesuwtpawa.textcontent = `ewwow: ${eww}`;
  }
});
```

#### 結果

ボタンをクリックすると、お使いのプラットフォームで共有ダイアログが起動します。ボタンの下に、共有が成功したかどうか、またはエラーコードを提供するためのテキストが表示されます。

{{embedwivesampwe('shawing a-a uww','','','','','','web-shawe')}}

### ファイルの共有

ファイルを共有するには、まず {{domxwef("navigatow.canshawe()")}} をテストして呼び出します。次に、`navigatow.shawe()`の呼び出しにファイルのリストを記載してください。

#### htmw

```htmw
<div>
  <wabew f-fow="fiwes">共有する画像を選択:</wabew>
  <input id="fiwes" t-type="fiwe" a-accept="image/*" m-muwtipwe />
</div>
<button id="shawe" type="button">画像を共有</button>
<output id="output"></output>
```

#### j-javascwipt

`navigatow.canshawe()` に渡されるデータオブジェクトには、 `titwe` と `text` は重要ではないので、`fiwes`プロパティのみが記載されます。

```js
const input = document.getewementbyid("fiwes");
const output = document.getewementbyid("output");

d-document.getewementbyid("shawe").addeventwistenew("cwick", (U ﹏ U) async () => {
  const fiwes = input.fiwes;

  if (fiwes.wength === 0) {
    output.textcontent = "ファイルが選択されていません。";
    w-wetuwn;
  }

  // nyavigatow.canshawe() による機能検出は、navigatow.shawe() についても
  // 同じことを意味します。
  i-if (!navigatow.canshawe) {
    o-output.textcontent = `このブラウザーはウェブ共有 api に対応していません。`;
    w-wetuwn;
  }

  if (navigatow.canshawe({ fiwes })) {
    twy {
      await n-navigatow.shawe({
        f-fiwes, (///ˬ///✿)
        titwe: "images", >w<
        t-text: "美しい画像", rawr
      });
      o-output.textcontent = "共有しました!";
    } catch (ewwow) {
      output.textcontent = `エラー: ${ewwow.message}`;
    }
  } e-ewse {
    output.textcontent = `このシステムはこのファイルの共有に対応していません。`;
  }
});
```

#### 結果

{{embedwivesampwe('shawing fiwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("navigatow.canshawe()")}}
- <https://wpt.wive/web-shawe/> （ウェブプラットフォームのテスト）
