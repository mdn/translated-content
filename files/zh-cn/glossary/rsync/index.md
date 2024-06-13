---
title: Rsync
slug: Glossary/Rsync
l10n:
  sourceCommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{GlossarySidebar}}

[Rsync](https://rsync.samba.org/) 是一个开源文件同步工具，提供增量文件传输。它可以通过不安全和安全的传输方式（如 SSH）使用。它在大多数基于 Unix 的系统（如 macOS 和 Linux）和 Windows 上都可用。还有一些基于 GUI 的工具使用 rsync，例如 [Acrosync](https://acrosync.com/mac.html)。

一段基础的命令如下：

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` 是一个破折号后跟一个或多个字母，例如 `-v` 用于显示详细的错误消息，`-b` 用于创建备份。请查看 [rsync 手册页](https://linux.die.net/man/1/rsync)（搜索“Options summary”）以获取完整的选项列表。
- `SOURCE` 是要复制或同步的本地文件或目录的路径。
- `user@` 是要将文件复制到的远程服务器上的用户的凭据。
- `x.x.x.x` 是远程服务器的 IP 地址。
- `DESTINATION` 是要将目录或文件复制到的位置的路径。

你也可以使用 `-e` 选项通过 SSH 进行连接，如下所示：

```bash
rsync [-options] -e "ssh [SSH 相关信息]" SOURCE user@x.x.x.x:DESTINATION
```

互联网上还有很多示例，包括[官方网站](https://rsync.samba.org/examples.html) 和 rsync 的[维基百科条目](https://en.wikipedia.org/wiki/Rsync#Examples)。
