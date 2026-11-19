---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
l10n:
  sourceCommit: ceaac5d55bef85edef9a4a716e6bd6ca3d3ec9c1
---

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
      <th scope="row">マニフェストバージョン</th>
      <td>2 以上</td>
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

**`commands`** キーを使うと、拡張機能用のキーボードショートカットを 1 つ以上定義できます。

それぞれのショートカットは、**名前**、**キーの組み合わせ**、**説明**で定義されます。拡張機能の `manifest.json` でコマンドを定義した後、{{WebExtAPIRef("commands")}} API で関連付けられたキーの組み合わせを待ち受けできます。

## 構文

`commands` キーはオブジェクトで、それぞれのショートカットはそのプロパティです。プロパティ名はショートカットの名前です。

それぞれのショートカットの値は最大 2 つのプロパティを持つオブジェクトです。

1. `suggested_key` {{optional_inline}}: ショートカットを有効にするキーの組み合わせです。
2. `description` {{optional_inline}}: ショートカットの機能を説明する文字列です。

`suggested_key` プロパティはオブジェクトで、次のプロパティを 0 個以上持ちます（値はすべて文字列です）。

- `"default"`
- `"mac"`
- `"linux"`
- `"windows"`
- `"chromeos"`
- `"android"`
- `"ios"`

各プロパティの値は、そのプラットフォームでのコマンドのキーボードショートカットです。キーを `+` で区切った文字列で指定します。`"default"` の値は、明示的に指定されていないすべてのプラットフォームで使用されます。`"default"` がない場合、ユーザーまたは {{WebExtAPIRef("commands.update")}} API が設定しない限り、明示的に指定されていないプラットフォームではショートカットはありません。

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
  },
  "do-something-else": {
    "suggested_key": {
      "linux": "Ctrl+Shift+P"
    }
  },
  "do-nothing-yet": {}
}
```

この JSON は、次のショートカットを定義します。

1. `"toggle-feature"` は Linux では <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd>、その他のプラットフォームでは <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> で実行されます。
2. `"do-another-thing"` はすべてのプラットフォームで <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd> で実行されます。
3. `"do-something-else"` は Linux でのみ <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> で実行され、その他のプラットフォームではデフォルトのショートカットはありません。
4. `"do-nothing-yet"` はキーボードショートカットを設定しませんが、ユーザーまたは {{WebExtAPIRef("commands.update")}} API がショートカットを設定できるようにします。

次のようなコードでコマンドを待ち受けできます。この例では `"toggle-feature"` コマンドを待ち受けします。

```js
browser.commands.onCommand.addListener(function (command) {
  if (command === "toggle-feature") {
    console.log("Toggling the feature!");
  }
});
```

### 特殊なショートカット

デフォルトの動作を持つ特殊なショートカットが 4 つあります。これらのショートカットでは、{{WebExtAPIRef("commands.onCommand")}} イベントは発生しません。

- `_execute_browser_action`: {{WebExtAPIRef("browserAction")}} API で作成された、または `manifest.json` の [`browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) キーで指定された[ツールバーボタン](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)のクリックと同じように動作します。
- `_execute_action`: {{WebExtAPIRef("action")}} API で作成された、または `manifest.json` の [`action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) キーで指定された[ツールバーボタン](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)のクリックと同じように動作します。
- `_execute_page_action`: {{WebExtAPIRef("pageAction")}} API で作成された、または `manifest.json` の [`page_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) キーで指定された[アドレスバーのボタン](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)のクリックと同じように動作します。
- `_execute_sidebar_action`: `manifest.json` の [`sidebar_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) キーで指定された拡張機能の[サイドバー](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)を開きます。

これらの特殊なショートカットが利用できるかどうかは、マニフェストのバージョンとブラウザーによって異なります。

<table>
<thead>
  <tr>
    <th></th>
    <th>マニフェスト V2</th>
    <th>マニフェスト V3</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>_execute_browser_action</code></td>
    <td>はい</td>
    <td>いいえ</td>
  </tr>
  <tr>
    <td><code>_execute_action</code></td>
    <td>いいえ</td>
    <td>はい</td>
  </tr>
  <tr>
    <td><code>_execute_page_action</code></td>
    <td>はい</td>
    <td>Firefox のみ</td>
  </tr>
  <tr>
    <td><code>_execute_sidebar_action</code></td>
    <td>Firefox のみ</td>
    <td>Firefox のみ</td>
  </tr>
</tbody>
</table>

> [!NOTE]
> 拡張機能を Manifest V2 から V3 に移行するとき、ユーザーが `_execute_browser_action` コマンドのショートカットを変更している場合、その変更は `_execute_action` コマンドに自動的に引き継がれます。この機能は Chrome 111 と Firefox 127 で実装されました。

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

ショートカットキーには２つのフォーマットがあります。キーの組み合わせとメディアキーです。

### キーの組み合わせ

> [!NOTE]
> Mac では `"Ctrl"` は `"Command"` として解釈されます。実際に `"Ctrl"` が必要な場合は、`"MacCtrl"` を指定してください。

キーの組み合わせは 2 つまたは 3 つのキーからなります。

1. **修飾子**（ファンクションキーの場合を除き必須）。`"Ctrl"`、`"Alt"`、`"Command"`、`"MacCtrl"` のいずれかです。
2. **第 2 修飾子**（任意）。指定する場合は `"Shift"`、または（Firefox 63 以降では）`"Ctrl"`、`"Alt"`、`"Command"`、`"MacCtrl"` のいずれかでなければなりません。主修飾子と同じ修飾子は指定できません。
3. **キー**（必須）。次のいずれかです。
   - `A` ～ `Z` の文字
   - `0` ～ `9` の数字
   - ファンクションキー `F1` ～ `F12`

     > [!NOTE]
     > Firefox 135 以降では、ユーザーは [拡張機能のショートカットを管理](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox)<sup>(英語)</sup> から、`F13` ～ `F19` キーを拡張機能に割り当てることができます。拡張機能はマニフェストファイルではこれらのキーを割り当てられませんが、{{WebExtAPIRef("commands.update")}} では割り当てられます。

   - `Comma`、`Period`、`Home`、`End`、`PageUp`、`PageDown`、`Space`、`Insert`、`Delete`、`Up`、`Down`、`Left`、`Right`

キーは、上記の順序でキー値を `+` で区切った文字列として指定します。例えば、`"Ctrl+Shift+Z"` のようにします。

キーの組み合わせがブラウザー（例えば `"Ctrl+P"`）や既存のアドオンですでに使用されている場合、その組み合わせを上書きすることはできません。定義することはできますが、ユーザーがその組み合わせを押してもイベントハンドラーは呼び出されません。

### メディアキー

あるいは、ショートカットキーは次のいずれかでも指定できます:

- `"MediaNextTrack"`
- `"MediaPlayPause"`
- `"MediaPrevTrack"`
- `"MediaStop"`

## ショートカットの更新

Firefox では、拡張機能から {{WebExtAPIRef("commands.update()")}} を使ってショートカットキーの設定を更新できます。ユーザーは `about:addons` の[拡張機能のショートカットを管理](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox)<sup>(英語)</sup> でショートカットを変更できます。この操作は[この動画](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647)<sup>(英語)</sup>で示されています。拡張機能からは {{WebExtAPIRef("commands.openShortcutSettings()")}} を使ってこの設定を開けます。

Chrome では、拡張機能からプログラムでショートカットキーを更新することはできません。ユーザーは `chrome://extensions/shortcuts` でショートカットを変更できます。このページは {{WebExtAPIRef("tabs.create()")}} を使って開けます。

Safari は拡張機能によるショートカットキーのプログラムでの変更に対応していません。Safari 26 以降では、ユーザーが Safari の拡張機能設定でショートカットを変更できます。

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

{{Compat}}
