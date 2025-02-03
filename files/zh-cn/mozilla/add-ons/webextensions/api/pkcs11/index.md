---
title: pkcs11
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11
l10n:
  sourceCommit: 824e5d88f3590fd39892d8975a2255c203feae9b
---

{{AddonSidebar}}

`pkcs11` API 允许扩展枚举 [PKCS #11](https://zh.wikipedia.org/wiki/PKCS11) 安全模块，并将它们作为密钥和证书的来源提供给浏览器。

要使用此 API，你需要预先取得“pkcs11”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 使用 Firefox 首选项对话框安装 PKCS #11 模块

执行以下步骤：

1. 将 PKCS #11 模块保存到本地计算机的永久位置
2. 选择**工具 > 选项**或选择 **Firefox 菜单**，然后选择**选项**
3. 一旦打开选项页面，选择**隐私与安全**
4. 在页面底部，单击或点击**证书**下的**安全设备…**
   ![安全模块和设备](device_manager.png)
5. 单击或点击**加载**按钮
   ![加载 PKCS#11 设备驱动程序](load_device_driver.png)
6. 为安全模块输入名称，例如“_我的客户数据库_”

   > [!WARNING]
   > 谨慎使用国际字符，因为 Firefox 中目前存在一个国际字符可能会导致问题的 bug。

7. 选择**浏览…**以查找本地计算机上 PKCS #11 模块的位置，然后单击或点击**确定**以确认。

## 提供 PKCS #11 模块

> [!NOTE]
> 自 Firefox 58 起，扩展可以使用此 API 枚举 PKCS #11 模块，并将其作为密钥和证书的来源提供给浏览器。

使用此 **API** 有两个环境上的前提条件：

- 用户的计算机上必须安装一个或多个 `PKCS #11` 模块
- 对于每个安装的 `PKCS #11` 模块，都必须有一个[本机清单](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)文件与之对应，保证浏览器能够成功找到该模块。

大多数情况下，用户或设备管理员会安装 `PKCS #11` 模块，而模块的安装程序则会同时安装本机清单文件。

但是，模块和清单不能作为扩展自身安装过程的一部分安装。

有关清单文件的内容和位置的详细信息，请参阅[本机清单](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)。

## 函数

- {{WebExtAPIRef("pkcs11.getModuleSlots()")}}
  - : 获取模块中每个 Slot（插槽）的名称以及它是否包含令牌。
- {{WebExtAPIRef("pkcs11.installModule()")}}
  - : 安装指定的 PKCS #11 模块。
- {{WebExtAPIRef("pkcs11.isModuleInstalled()")}}
  - : 检查指定的 PKCS #11 模块是否已安装。
- {{WebExtAPIRef("pkcs11.uninstallModule()")}}
  - : 卸载指定的 PKCS #11 模块。

## 浏览器兼容性

{{WebExtExamples("h2")}}

{{Compat}}
