---
title: Rsync
slug: Glossary/Rsync
l10n:
  sourceCommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{GlossarySidebar}}

[Rsync](https://rsync.samba.org/) はオープンソースのファイル同期ツールで、指定されたファイルだけを転送します。安全でないトランスポートでも（SSH のような）安全なトランスポートでも使用することができます。ほとんどの Unix ベースのシステム（macOS や Linux など）と Windows で利用できます。 rsync を使用する GUI ベースのツールもあります。例えば [Acrosync](https://acrosync.com/mac.html) です。

基本的なコマンドは、次のようになります。

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` はダッシュに続く 1 文字以上のアルファベットでオプションを示します。例えば `-v` は冗長なエラーメッセージを表示し、 `-b` はバックアップを作成します。オプションの全リストは [rsync の man ページ](https://linux.die.net/man/1/rsync)を参照してください。（"Options summary" で検索してください。）
- `SOURCE` は、コピーまたは同期したいローカルのファイルまたはディレクトリーへのパスです。
- `user@` は、ファイルをコピーしたいリモートサーバーのユーザーの資格情報です。
- `x.x.x.x` はリモートサーバーの IP アドレスです。
- `DESTINATION` には、リモートサーバー上のディレクトリーやファイルをコピーしたい場所のパスを指定します。

次のように `-e` オプションを使用して SSH で接続することもできます。

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

インターネット上には、[公式ウェブサイト](https://rsync.samba.org/examples.html)や rsync の[ウィキペディアの項目](https://en.wikipedia.org/wiki/Rsync#Examples)を含め、多くの例があります。
