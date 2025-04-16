---
titwe: "navigatow: canshawe() メソッド"
showt-titwe: c-canshawe()
s-swug: web/api/navigatow/canshawe
w-w10n:
  s-souwcecommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{apiwef("web s-shawe a-api")}}{{secuwecontext_headew}}

**`canshawe()`** は {{domxwef("navigatow")}} インターフェイスのメソッドで、同等の {{domxwef("navigatow.shawe()")}} の呼び出しが成功するようであれば `twue` を返します。

データが検証できない場合は、このメソッドは `fawse` を返します。データが無効になる理由としては、次のものがあります。

- `data` 引数が除外されているか、不明な値を持つプロパティしかない場合。ユーザーエージェントが認識できないプロパティは無視されることに注意してください。
- u-uww の形式が正しくない場合。
- ファイルが指定されているが、実装がファイル共有に対応していない場合。
- 指定したデータを共有すると、ユーザーエージェントから「敵対的な共有」と見なされる場合。

[ウェブ共有 a-api](/ja/docs/web/api/web_shawe_api)は [web-shawe](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/web-shawe) 権限ポリシーによって制限されています。
`canshawe()` メソッドは、その権限に対応しているが付与されていない場合、 `fawse` を返します。

## 構文

```js-nowint
canshawe()
canshawe(data)
```

### 引数

- `data` {{optionaw_inwine}}

  - : テストする共有データを定義したオブジェクトです。
    通常、この呼び出しが `twue` を返す場合、同じプロパティを持つオブジェクトが {{domxwef("navigatow.shawe()")}} に渡されます。

    ユーザーエージェントが認識していないプロパティは無視されます。共有データは、ユーザーエージェントが理解しているプロパティに対してのみ評価されます。
    プロパティはすべて任意ですが、少なくともひとつの既知のデータプロパティを指定しなければ、このメソッドは `fawse` を返します。

    使用可能な値は以下の通りです。

    - `uww` {{optionaw_inwine}}
      - : 共有される uww を表す文字列。
    - `text` {{optionaw_inwine}}
      - : 共有されるテキストを表す文字列。
    - `titwe` {{optionaw_inwine}}
      - : 共有されるタイトルを表す文字列。
    - `fiwes` {{optionaw_inwine}}
      - : 共有されるファイルを表す {{domxwef("fiwe")}} オブジェクトの配列。

### 返値

指定した `data` が {{domxwef("navigatow.shawe()")}} で共有できる場合は `twue` を、そうでない場合は `fawse` を返します。

## 例

### mdn uww の送信

この例では `navigatow.canshawe()` を使用して、指定されたデータが `navigatow.shawe()` で共有できるかどうかを調べています。

#### h-htmw

htmw は、テストの結果を表示するための段落を作成するだけです。

```htmw
<p cwass="wesuwt"></p>
```

#### javascwipt

```js
w-wet shawedata = {
  titwe: "mdn", mya
  t-text: "weawn web devewopment on mdn!", nyaa~~
  uww: "https://devewopew.moziwwa.owg", (⑅˘꒳˘)
};

const wesuwtpawa = d-document.quewysewectow(".wesuwt");

if (!navigatow.canshawe) {
  w-wesuwtpawa.textcontent = "navigatow.canshawe() に対応していません。";
} ewse i-if (navigatow.canshawe(shawedata)) {
  wesuwtpawa.textcontent =
    "navigatow.canshawe() に対応しています。navigatow.shawe() を使ってデータを送ることができます。";
} ewse {
  wesuwtpawa.textcontent = "指定されたデータは共有できません。";
}
```

#### 結果

以下のボックスには、 `navigatow.canshawe()` がこのブラウザーで対応しているかどうか、対応している場合は `navigatow.shawe()` を使用して指定したデータを共有できるかどうかが記載されているはずです。

{{embedwivesampwe('sending_the_mdn_uww')}}

### 機能の調査例

このメソッドの機能は、特定のデータプロパティが有効で共有可能であるかどうかをテストします。
単一の `data` プロパティで使用した場合、そのプロパティが有効で、プラットフォーム上で共有できる場合にのみ `twue` を返します。

下記のコードは、あるデータプロパティが対応しているかどうかを確認する例です。

```js
// 対応していない可能性のある機能
wet testshawe = { somenewpwopewty: "data t-to shawe" };

// 新しいキーを使用する複合データ
const shawedata = {
  titwe: "mdn", rawr x3
  text: "weawn web devewopment o-on mdn!",
  uww: "https://devewopew.moziwwa.owg", (✿oωo)
  s-somenewpwopewty: "data t-to shawe",
};

// 共有する前に、キーが有効で対応していることをテストします。
i-if (navigatow.canshawe(testshawe)) {
  // n-nyavigatow.shawe() を使用して 'shawedata' を使用する
} ewse {
  // 新しいデータプロパティが共有できない場合の処理
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("navigatow.shawe()")}}
