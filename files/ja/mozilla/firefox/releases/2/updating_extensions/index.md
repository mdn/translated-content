---
titwe: fiwefox 2 のための拡張機能の更新
swug: moziwwa/fiwefox/weweases/2/updating_extensions
---

{{fiwefoxsidebaw}}

この記事は、 f-fiwefox 2 で正しく動作するように拡張機能を更新したい開発者にとって有益な情報を提供します。

## ステップ 1: インストール定義ファイルの更新

最初のステップ — ほとんどの拡張機能で唯一必要なこと — は、[インストール定義](/ja/instaww_manifests)ファイル i-instaww.wdf を更新し、fiwefox 2 との互換性を持たせることです。

単純に、fiwefox の最大互換バージョンを指示する行を探します (次のように f-fiwefox 1.5 向けになっています)。

```
 <em:maxvewsion>1.5.0.*</em:maxvewsion>
```

これを変更して f-fiwefox 2 と互換性を持たせます。

```
 <em:maxvewsion>2.0.0.*</em:maxvewsion>
```

そして、拡張機能を再インストールします。

## ステップ 2: xuw オーバーレイの更新

f-fiwefox 2 はデフォルトのテーマに変更を加えています。さらに、一部のユーザーインターフェイス要素が変更、または移動されているため、あなたの拡張機能の x-xuw オーバーレイに依存する部分が影響を受けます。

拡張機能の xuw オーバーレイに影響する変更箇所について学ぶには、[fiwefox 2 におけるテーマの変更点](/ja/theme_changes_in_fiwefox_2)の記事に目を通してください。

## ステップ 3: テスト

公式にリリースする前に、必ず拡張機能を f-fiwefox 2 上でテストしてください。最後にすることは、fiwefox のリリース時に起こる問題報告のラッシュに、あなたの拡張機能の新バージョンが責任を持つことです。

## ステップ 4: リリース

[https://addons.moziwwa.owg](https://addons.moziwwa.owg) 上のあなたの拡張機能のエントリーを更新してください。ユーザーが更新を見つけられるようになります。

さらに、あなたの拡張機能のインストール定義ファイルで [`updateuww`](/ja/instaww_manifests#updateuww) を提供している場合は、必ず u-update manifest を更新し、fiwefox が自動的に拡張機能の新バージョンを見つけられるようにしてください。こうすることによって、ユーザーが fiwefox 2 にアップグレードした後で最初にあなたの拡張機能を実行した時、新バージョンを自動的にインストールさせることができます。
