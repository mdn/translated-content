---
title: DOMException
slug: Web/API/DOMException
---

{{ APIRef("DOM") }}

**`DOMException`** 接口代表调用方法或访问 Web API 属性时发生的异常事件（被称为**异常**，**exception**）。这基本上是在 Web API 中如何描述错误情况的

每个异常都有一个名称 **name**，一个采用骆驼式命名法的简短字符串，用于描述识别错误或异常情况。

> **备注：** 骆驼式命名法（CamelCase style），又称驼峰命名法。与 JavaScript 中更常见的小驼峰命名法有别，此处应是指大驼峰命名法。大驼峰命名法又称 Pascal 命名法。具体为名称中的每个单词**仅首字母大写**（**Capitalize**），可参考下方错误名称。

## 构造函数

- {{domxref("DOMException.DOMException()", "DOMException()")}} {{experimental_inline}}
  - : 返回一个包含指定消息和名称的 `DOMException` 对象。

## 属性

- {{domxref("DOMException.code")}} {{deprecated_inline}} {{readOnlyInline}}
  - : 返回一个 `short`，包含错误代码常量中的一个，或者返回 `0`，如果没有匹配的话。这个字段由于历史原因被使用。现在不再使用这个新的 DOM 异常：他们把这个信息放入 {{domxref("DOMException.name")}} 属性。
- {{domxref("DOMException.message")}} {{readOnlyInline}}
  - : 返回一个 {{ domxref("DOMString") }} 代表与给定的[错误名称](/zh-CN/docs/Web/API/DOMException#Error_names)有关信息或描述。
- {{domxref("DOMException.name")}} {{readOnlyInline}}
  - : 返回一个 {{domxref("DOMString")}} 包含与[错误名称](#Error_names)相关的字符串。

## 错误名称

常见的错误名称列在这里。一些 API 定义了它们自己的名称组，所以这未必是一个完整的列表。

> **备注：** 因为很久以前错误是由数值（code value，代码值）与一个对应的命名变量定义的，所以以下部分条目包含过去使用的遗留代码值和常量名。

- `IndexSizeError`
  - : 索引不在允许的范围内。例如，这可以被 {{ domxref("Range") }} 对象抛出。（遗留代码值：`1`，遗留常数名称：`INDEX_SIZE_ERR`)
- [`HierarchyRequestError`]()
  - : 节点树层次结构有误。（遗留代码值： `3` ，遗留常数名称：`HIERARCHY_REQUEST_ERR`)
- `WrongDocumentError`
  - : 对象在错误的 {{ domxref("Document") }}中。（遗留代码值： `4`，遗留常数名称： `WRONG_DOCUMENT_ERR`）
- `InvalidCharacterError`
  - : 字符串包含无效字符。（Legacy code value: `5` and legacy constant name: `INVALID_CHARACTER_ERR`）
- `NoModificationAllowedError`
  - : 对象不能被修改。（Legacy code value: `7` and legacy constant name: `NO_MODIFICATION_ALLOWED_ERR`）
- `NotFoundError`
  - : 找不到对象。（Legacy code value: `8` and legacy constant name: `NOT_FOUND_ERR`）
- `NotSupportedError`
  - : 不支持的操作。 (Legacy code value: `9` and legacy constant name: `NOT_SUPPORTED_ERR`)
- `InvalidStateError`
  - : 对象是一个无效的状态。(Legacy code value: `11` and legacy constant name: `INVALID_STATE_ERR`)
- `SyntaxError`
  - : 字符串不匹配预期的模式。(Legacy code value: `12` and legacy constant name: `SYNTAX_ERR`)
- `InvalidModificationError`
  - : 对象不能被这种方式修改。 (Legacy code value: `13` and legacy constant name: `INVALID_MODIFICATION_ERR`)
- `NamespaceError`
  - : 操作在 XML 名称空间是不允许的。(Legacy code value: `14` and legacy constant name: `NAMESPACE_ERR`)
- `InvalidAccessError`
  - : 对象不支持此操作或参数 (Legacy code value: `15` and legacy constant name: `INVALID_ACCESS_ERR`)
- `TypeMismatchError` {{deprecated_inline}}
  - : 对象的类型不匹配预期的类型。(Legacy code value: `17` and legacy constant name: `TYPE_MISMATCH_ERR`) 这个值已被弃用，JavaScript {{jsxref("TypeError")}} 异常被提出而不是`DOMException`
- `SecurityError` {{experimental_inline}}
  - : 操作不安全。 (Legacy code value: `18` and legacy constant name: `SECURITY_ERR`)
- `NetworkError` {{experimental_inline}}
  - : 网络错误发生。(Legacy code value: `19` and legacy constant name: `NETWORK_ERR`)
- `AbortError` {{experimental_inline}}
  - : T 操作中止。(Legacy code value: `20` and legacy constant name: `ABORT_ERR`)
- `URLMismatchError` {{experimental_inline}}
  - : 给定的 URL 不匹配另一个 URL。 (Legacy code value: `21` and legacy constant name: `URL_MISMATCH_ERR`)
- `QuotaExceededError` {{experimental_inline}}
  - : 给定配额已经超过了 (Legacy code value: `22` and legacy constant name: `QUOTA_EXCEEDED_ERR`)
- `TimeoutError` {{experimental_inline}}
  - : 操作超时。(Legacy code value: `23` and legacy constant name: `TIMEOUT_ERR`)
- `InvalidNodeTypeError` {{experimental_inline}}
  - : 这个操作的节点是不正确的或祖先是不正确的。(Legacy code value: `24` and legacy constant name: `INVALID_NODE_TYPE_ERR`)
- `sDataCloneError` {{experimental_inline}}
  - : 对象不可被克隆。 (Legacy code value: `25` and legacy constant name: `DATA_CLONE_ERR`)
- `EncodingError` {{experimental_inline}}
  - : 编码或解码操作失败 (没有遗留代码值和常量的名字).
- `NotReadableError` {{experimental_inline}}
  - : 输入/输出读操作失败 (没有遗留代码值和常量的名字).
- `UnknownError` {{experimental_inline}}
  - : 因未知的瞬态的原因使操作失败 (例如 内存不足) (No legacy code value and constant name).
- `ConstraintError` {{experimental_inline}}
  - : 条件没满足而导致事件失败的异常操作 (No legacy code value and constant name).
- `DataError` {{experimental_inline}}
  - : 提供的数据不足 (No legacy code value and constant name).
- `TransactionInactiveError` {{experimental_inline}}
  - : 请求被当前不活跃的事件或已完成事件阻止 (No legacy code value and constant name)。
- `ReadOnlyError` {{experimental_inline}}
  - : 尝试操作 "readonly" 事件 (No legacy code value and constant name)。
- `VersionError` {{experimental_inline}}
  - : 尝试打开一个比现有版本更低的数据库 (No legacy code value and constant name)。
- `OperationError` {{experimental_inline}}
  - : 因特定操作失败原因而失败 (No legacy code value and constant name).
- `NotAllowedError` {{experimental_inline}}
  - : \<dd 请求不被用户代理或当前上下文所在平台允许，可能因为用户拒绝授权 (no="" and="" code="" constant="" dd="" legacy="" name)。<="" value=""> \</dd 请求不被用户代理或当前上下文所在平台允许，可能因为用户拒绝授权>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("DOMError") }}
