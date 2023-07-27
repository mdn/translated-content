---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

`commands` キーを使うと拡張機能用のキーボードショートカットを定義できます。

それぞれのショートカットは名前、キーの組み合わせ、説明で定義されます。manifest.json で command を定義すると、関連したキーの組み合わせを {{WebExtAPIRef("commands")}} JavaScript API を用いてリッスンできます。

## 構文

`commands` キーはオブジェクトで、それぞれのショートカットはそのプロパティです。プロパティ名はショートカットの名前です。

それぞれのショートカット自身がオブジェクトで、最大 2 つのプロパティを持ちます:

- `suggested_key`: これはキーの組み合わせを定義します
- `description`: このショートカットを説明する文字

`suggested_key` プロパティ自身がオブジェクトで、次のプロパティ(これがすべてです)のいくつかを持ちます:

- `"default"`, `"mac"`, `"linux"`, `"windows"`, `"chromeos"`, `"android"`, `"ios"`

それぞれのプロパティの値はそのプラットフォーム用のキーボードショートカットで、"+" で分割されたキーの文字列で与えられます。`"default"` 用の値が明示的に載っていないすべてのプラットフォームで使われます。

例えば:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Alt+Shift+U",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event to the extension"
  },
  "do-another-thing": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

これは 2 つのショートカットを定義します:

- 1 つは "toggle-feature" という名前で、Linux では&#x20;

  <kbd>Ctrl</kbd>

  \+

  <kbd>Shift</kbd>

  \+

  <kbd>U</kbd>

  &#x20;、その他のプラットフォームでは&#x20;

  <kbd>Alt</kbd>

  \+

  <kbd>Shift</kbd>

  \+

  <kbd>U</kbd>

  &#x20;でアクセスされます。

- 1 つは "do-another-thing" という名前で、すべてのプラットフォームで&#x20;

  <kbd>Ctrl</kbd>

  \+

  <kbd>Shift</kbd>

  \+

  <kbd>Y</kbd>

  &#x20;でアクセスされます。

次に、これらのコマンドの最初を下記のようにリッスンできます:

```js
browser.commands.onCommand.addListener(function (command) {
  if (command == "toggle-feature") {
    console.log("toggling the feature!");
  }
});
```

### 特殊なショートカット

特殊なショートカットが 3 つあります:

- \_execute_browser_action: 拡張機能の[ブラウザーアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_action)のクリックのように動作します。
- \_execute_page_action: 拡張機能の[ページアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/Page_actions)のクリックのように動作します。
- \_execute_sidebar_action: 拡張機能の[サイドバー](/ja/docs/Mozilla/Add-ons/WebExtensions/Sidebars)を開きます。Firefox のバージョン 54 以降のみでサポートされます。

例えば、これはブラウザーアクションをクリックするキーの組み合わせを定義します:

```js
"commands": {
  "_execute_browser_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## ショートカットの値

ショートカットキーには２つのフォーマットがあります: キーの組み合わせとメディアキーです。

### キーの組み合わせ

Mac では、"Ctrl" は"Command" と翻訳され、実際の "Ctrl"が必要ならば "MacCtrl"と指定します。

キーの組み合わせは 2 つか 3 つのキーからなります:

- **modifier** (ファンクションキー以外では必須)。これは次のいずれかです: "Ctrl", "Alt", "Command", "MacCtrl".
- **secondary modifier** (オプション)。指定する場合は"Shift"でなければなりません。
- **key** (必須)。これは次のいずれかです:

  - A-Z の範囲の文字
  - 0-9 の範囲の数字
  - ファンクションキー F1-F12
  - カンマ, ピリオド, Home, End, PageUp, PageDown, スペース, Insert, Delete, 上矢印, 下矢印, 左矢印, 右矢印

キーは、上記のリストの順に、"+" で区切られたキー値の組み合わせで与えられます: 例えば、 "Ctrl+Shift+Z".

キーの組み合わせがブラウザーや(例えば "Ctrl+P")、既存のアドオンですでに使われている場合、それを上書きできます。定義することもできますが、ユーザーが入力してもイベントハンドラーは呼ばれません。

### メディアキー

あるいは、ショートカットキーは次のいずれかでも指定できます:

- "MediaNextTrack", "MediaPlayPause", "MediaPrevTrack", "MediaStop"

## 例

既定値だけを使って単一のショートカットを定義するには:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    },
    "description": "Send a 'toggle-feature' event"
  }
}
```

２つのショートカットを定義し、１つはプラットフォーム固有のキーの組み合わせとするには:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Alt+Shift+U",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event"
  },
  "do-another-thing": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## ブラウザーの互換性

{{Compat("webextensions.manifest.commands")}}
