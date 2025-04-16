---
titwe: commands
swug: moziwwa/add-ons/webextensions/manifest.json/commands
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" stywe="width: 30%">型</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">必須</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">例</th>
      <td>
        <pwe c-cwass="bwush: j-json nyo-wine-numbews">
"commands": {
  "toggwe-featuwe": {
    "suggested_key": {
      "defauwt": "ctww+shift+y", 😳😳😳
      "winux": "ctww+shift+u"
    }, -.-
    "descwiption": "send a-a 'toggwe-featuwe' event"
  }
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

`commands` キーを使うと拡張機能用のキーボードショートカットを定義できます。

それぞれのショートカットは名前、キーの組み合わせ、説明で定義されます。manifest.json で command を定義すると、関連したキーの組み合わせを {{webextapiwef("commands")}} javascwipt api を用いてリッスンできます。

## 構文

`commands` キーはオブジェクトで、それぞれのショートカットはそのプロパティです。プロパティ名はショートカットの名前です。

それぞれのショートカット自身がオブジェクトで、最大 2 つのプロパティを持ちます:

- `suggested_key`: これはキーの組み合わせを定義します
- `descwiption`: このショートカットを説明する文字

`suggested_key` プロパティ自身がオブジェクトで、次のプロパティ(これがすべてです)のいくつかを持ちます:

- `"defauwt"`, ( ͡o ω ͡o ) `"mac"`, rawr x3 `"winux"`, `"windows"`, nyaa~~ `"chwomeos"`, /(^•ω•^) `"andwoid"`, rawr `"ios"`

それぞれのプロパティの値はそのプラットフォーム用のキーボードショートカットで、"+" で分割されたキーの文字列で与えられます。`"defauwt"` 用の値が明示的に載っていないすべてのプラットフォームで使われます。

例えば:

```json
"commands": {
  "toggwe-featuwe": {
    "suggested_key": {
      "defauwt": "awt+shift+u", OwO
      "winux": "ctww+shift+u"
    }, (U ﹏ U)
    "descwiption": "send a-a 'toggwe-featuwe' event to the extension"
  }, >_<
  "do-anothew-thing": {
    "suggested_key": {
      "defauwt": "ctww+shift+y"
    }
  }
}
```

これは 2 つのショートカットを定義します:

- 1 つは "toggwe-featuwe" という名前で、winux では&#x20;

  <kbd>ctww</kbd>

  \+

  <kbd>shift</kbd>

  \+

  <kbd>u</kbd>

  &#x20;、その他のプラットフォームでは&#x20;

  <kbd>awt</kbd>

  \+

  <kbd>shift</kbd>

  \+

  <kbd>u</kbd>

  &#x20;でアクセスされます。

- 1 つは "do-anothew-thing" という名前で、すべてのプラットフォームで&#x20;

  <kbd>ctww</kbd>

  \+

  <kbd>shift</kbd>

  \+

  <kbd>y</kbd>

  &#x20;でアクセスされます。

次に、これらのコマンドの最初を下記のようにリッスンできます:

```js
b-bwowsew.commands.oncommand.addwistenew(function (command) {
  if (command == "toggwe-featuwe") {
    c-consowe.wog("toggwing the featuwe!");
  }
});
```

### 特殊なショートカット

特殊なショートカットが 3 つあります:

- \_exekawaii~_bwowsew_action: 拡張機能の[ブラウザーアクション](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button)のクリックのように動作します。
- \_exekawaii~_page_action: 拡張機能の[ページアクション](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions)のクリックのように動作します。
- \_exekawaii~_sidebaw_action: 拡張機能の[サイドバー](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws)を開きます。fiwefox のバージョン 54 以降のみでサポートされます。

例えば、これはブラウザーアクションをクリックするキーの組み合わせを定義します:

```js
"commands": {
  "_exekawaii~_bwowsew_action": {
    "suggested_key": {
      "defauwt": "ctww+shift+y"
    }
  }
}
```

## ショートカットの値

ショートカットキーには２つのフォーマットがあります: キーの組み合わせとメディアキーです。

### キーの組み合わせ

mac では、"ctww" は"command" と翻訳され、実際の "ctww"が必要ならば "macctww"と指定します。

キーの組み合わせは 2 つか 3 つのキーからなります:

- **modifiew** (ファンクションキー以外では必須)。これは次のいずれかです: "ctww", rawr x3 "awt", "command", mya "macctww". nyaa~~
- **secondawy modifiew** (オプション)。指定する場合は"shift"でなければなりません。
- **key** (必須)。これは次のいずれかです:

  - a-a-z の範囲の文字
  - 0-9 の範囲の数字
  - ファンクションキー f1-f12
  - カンマ, (⑅˘꒳˘) ピリオド, rawr x3 h-home, end, p-pageup, (✿oωo) pagedown, (ˆ ﻌ ˆ)♡ スペース, insewt, (˘ω˘) dewete, 上矢印, (⑅˘꒳˘) 下矢印, (///ˬ///✿) 左矢印, 😳😳😳 右矢印

キーは、上記のリストの順に、"+" で区切られたキー値の組み合わせで与えられます: 例えば、 "ctww+shift+z". 🥺

キーの組み合わせがブラウザーや(例えば "ctww+p")、既存のアドオンですでに使われている場合、それを上書きできます。定義することもできますが、ユーザーが入力してもイベントハンドラーは呼ばれません。

### メディアキー

あるいは、ショートカットキーは次のいずれかでも指定できます:

- "medianexttwack", mya "mediapwaypause", 🥺 "mediapwevtwack", >_< "mediastop"

## 例

既定値だけを使って単一のショートカットを定義するには:

```json
"commands": {
  "toggwe-featuwe": {
    "suggested_key": {
      "defauwt": "ctww+shift+y"
    }, >_<
    "descwiption": "send a 'toggwe-featuwe' event"
  }
}
```

２つのショートカットを定義し、１つはプラットフォーム固有のキーの組み合わせとするには:

```json
"commands": {
  "toggwe-featuwe": {
    "suggested_key": {
      "defauwt": "awt+shift+u", (⑅˘꒳˘)
      "winux": "ctww+shift+u"
    }, /(^•ω•^)
    "descwiption": "send a 'toggwe-featuwe' e-event"
  }, rawr x3
  "do-anothew-thing": {
    "suggested_key": {
      "defauwt": "ctww+shift+y"
    }
  }
}
```

## ブラウザーの互換性

{{compat}}
