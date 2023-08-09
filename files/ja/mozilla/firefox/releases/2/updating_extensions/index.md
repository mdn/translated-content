---
title: Firefox 2 のための拡張機能の更新
slug: Mozilla/Firefox/Releases/2/Updating_extensions
---

{{FirefoxSidebar}}

この記事は、 Firefox 2 で正しく動作するように拡張機能を更新したい開発者にとって有益な情報を提供します。

## ステップ 1: インストール定義ファイルの更新

最初のステップ — ほとんどの拡張機能で唯一必要なこと — は、[インストール定義](/ja/Install_Manifests)ファイル install.rdf を更新し、Firefox 2 との互換性を持たせることです。

単純に、Firefox の最大互換バージョンを指示する行を探します (次のように Firefox 1.5 向けになっています)。

```
 <em:maxVersion>1.5.0.*</em:maxVersion>
```

これを変更して Firefox 2 と互換性を持たせます。

```
 <em:maxVersion>2.0.0.*</em:maxVersion>
```

そして、拡張機能を再インストールします。

## ステップ 2: XUL オーバーレイの更新

Firefox 2 はデフォルトのテーマに変更を加えています。さらに、一部のユーザインタフェース要素が変更、または移動されているため、あなたの拡張機能の XUL オーバーレイに依存する部分が影響を受けます。

拡張機能の XUL オーバーレイに影響する変更箇所について学ぶには、[Firefox 2 におけるテーマの変更点](/ja/Theme_changes_in_Firefox_2)の記事に目を通してください。

## ステップ 3: テスト

公式にリリースする前に、必ず拡張機能を Firefox 2 上でテストしてください。最後にすることは、Firefox のリリース時に起こる問題報告のラッシュに、あなたの拡張機能の新バージョンが責任を持つことです。

## ステップ 4: リリース

[http://addons.mozilla.org](https://addons.mozilla.org) 上のあなたの拡張機能のエントリーを更新してください。ユーザが更新を見つけられるようになります。

さらに、あなたの拡張機能のインストール定義ファイルで [`updateURL`](/ja/Install_Manifests#updateURL) を提供している場合は、必ず update manifest を更新し、Firefox が自動的に拡張機能の新バージョンを見つけられるようにしてください。こうすることによって、ユーザが Firefox 2 にアップグレードした後で最初にあなたの拡張機能を実行した時、新バージョンを自動的にインストールさせることができます。
