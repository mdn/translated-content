---
title: DOMException
slug: Web/API/DOMException
---

{{ APIRef("DOM") }}

**`DOMException`** 接口代表调用方法或访问 Web API 属性时发生的不正常事件（被称为**异常**，**exception**）。这就是 Web API 中描述错误条件的方式。

每个异常都有一个**名称**（name），一个采用驼峰命名法的简短字符串，用于描述识别错误或异常情况。

`DOMException` 是一个{{Glossary("Serializable object","可序列化对象")}}，因此可以使用 {{DOMxRef("Window.structuredClone", "structuredClone()")}} 克隆，或使用 {{domxref("Worker.postMessage()", "postMessage()")}} 在 [Worker](/zh-CN/docs/Web/API/Worker) 之间复制。

## 构造函数

- {{domxref("DOMException.DOMException()", "DOMException()")}}
  - : 返回一个包含指定消息和名称的 `DOMException` 对象。

## 实例属性

- {{domxref("DOMException.code")}} {{deprecated_inline}} {{readOnlyInline}}
  - : 返回任意一个遗留错误代码常量，如果不匹配则返回 `0`。
- {{domxref("DOMException.message")}} {{readOnlyInline}}
  - : 返回一个字符串，代表与给定的[错误名称](#错误名称)有关的信息或描述。
- {{domxref("DOMException.name")}} {{readOnlyInline}}
  - : 返回一个字符串，包含与[错误名称](#错误名称)相关的字符串。

## 错误名称

常见的错误名称列在这里。一些 API 定义了它们自己的名称组，所以这未必是一个完整的列表。

请注意，以下已废弃的历史错误没有错误名称，而只有遗留常量代码值和遗留常量名称：

- 遗留代码值：`2`，遗留常量名称：`DOMSTRING_SIZE_ERR`
- 遗留代码值：`6`，遗留常量名称：`NO_DATA_ALLOWED_ERR`
- 遗留代码值：`16`，遗留常量名称：`VALIDATION_ERR`

> [!NOTE]
> 由于历史上错误是通过一个数值来识别的，该数值与定义为该数值的命名变量相对应，因此下面的一些条目指出了过去使用的历史代码值和常量名称。

- `IndexSizeError`
  - : 索引不在允许的范围内。例如，这可以被 {{ domxref("Range") }} 对象抛出。（遗留代码值：`1`，遗留常量名称：`INDEX_SIZE_ERR`）
- `HierarchyRequestError`
  - : 节点树层次结构有误。（遗留代码值：`3`，遗留常量名称：`HIERARCHY_REQUEST_ERR`）
- `WrongDocumentError`
  - : 对象在错误的 {{ domxref("Document") }} 中。（遗留代码值：`4`，遗留常量名称：`WRONG_DOCUMENT_ERR`）
- `InvalidCharacterError`
  - : 字符串包含无效字符。（遗留代码值：`5`，遗留常量名称：`INVALID_CHARACTER_ERR`）
- `NoModificationAllowedError`
  - : 对象不能被修改。（遗留代码值：`7`，遗留常量名称：`NO_MODIFICATION_ALLOWED_ERR`）
- `NotFoundError`
  - : 找不到对象。（遗留代码值：`8`，遗留常量名称：`NOT_FOUND_ERR`）
- `NotSupportedError`
  - : 不支持的操作。（遗留代码值：`9`，遗留常量名称：`NOT_SUPPORTED_ERR`）
- `InvalidStateError`
  - : 对象是一个无效的状态。（遗留代码值：`11`，遗留常量名称：`INVALID_STATE_ERR`）
- `SyntaxError`
  - : 字符串不匹配预期的模式。（遗留代码值：`12`，遗留常量名称：`SYNTAX_ERR`）
- `InvalidModificationError`
  - : 对象不能被这种方式修改。（遗留代码值：`13`，遗留常量名称：`INVALID_MODIFICATION_ERR`）
- `NamespaceError`
  - : 操作在 XML 名称空间是不允许的。（遗留代码值：`14`，遗留常量名称：`NAMESPACE_ERR`）
- `InvalidAccessError`
  - : 对象不支持此操作或参数。（遗留代码值：`15`，遗留常量名称：`INVALID_ACCESS_ERR`）
- `TypeMismatchError` {{deprecated_inline}}
  - : 对象的类型不匹配预期的类型。（遗留代码值：`17`，遗留常量名称：`TYPE_MISMATCH_ERR`）。这个值已被弃用，现在会抛出 JavaScript {{jsxref("TypeError")}} 异常而不是含有该值的 `DOMException`。
- `SecurityError` {{experimental_inline}}
  - : 操作不安全。（遗留代码值：`18`，遗留常量名称：`SECURITY_ERR`）
- `NetworkError` {{experimental_inline}}
  - : 网络错误发生。（遗留代码值：`19`，遗留常量名称：`NETWORK_ERR`）
- `AbortError` {{experimental_inline}}
  - : 操作中止。（遗留代码值：`20`，遗留常量名称：`ABORT_ERR`）
- `URLMismatchError` {{experimental_inline}}
  - : 给定的 URL 不匹配另一个 URL。（遗留代码值：`21`，遗留常量名称：`URL_MISMATCH_ERR`）
- `QuotaExceededError` {{experimental_inline}}
  - : 超出给定配额。（遗留代码值：`22`，遗留常量名称：`QUOTA_EXCEEDED_ERR`）
- `TimeoutError` {{experimental_inline}}
  - : 操作超时。（遗留代码值：`23`，遗留常量名称：`TIMEOUT_ERR`）
- `InvalidNodeTypeError` {{experimental_inline}}
  - : 这个操作的节点是不正确的或祖先是不正确的。（遗留代码值：`24`，遗留常量名称：`INVALID_NODE_TYPE_ERR`）
- `DataCloneError` {{experimental_inline}}
  - : 对象不可被克隆。（遗留代码值：`25`，遗留常量名称：`DATA_CLONE_ERR`）
- `EncodingError` {{experimental_inline}}
  - : 编码或解码操作失败（没有遗留代码值和常量的名字）。
- `NotReadableError` {{experimental_inline}}
  - : 输入/输出读操作失败（没有遗留代码值和常量的名字）。
- `UnknownError` {{experimental_inline}}
  - : 因未知的瞬态的原因使操作失败（例如内存不足）（没有遗留代码值和常量的名字）。
- `ConstraintError` {{experimental_inline}}
  - : 条件没满足而导致事件失败的异常操作（没有遗留代码值和常量的名字）。
- `DataError` {{experimental_inline}}
  - : 提供的数据不足（没有遗留代码值和常量的名字）。
- `TransactionInactiveError` {{experimental_inline}}
  - : 请求被当前不活跃的事件或已完成事件阻止（没有遗留代码值和常量的名字）。
- `ReadOnlyError` {{experimental_inline}}
  - : 尝试操作“只读”事件（没有遗留代码值和常量的名字）。
- `VersionError` {{experimental_inline}}
  - : 尝试打开一个比现有版本更低的数据库（没有遗留代码值和常量的名字）。
- `OperationError` {{experimental_inline}}
  - : 因特定操作失败原因而失败（没有遗留代码值和常量的名字）。
- `NotAllowedError` {{experimental_inline}}
  - : 当前上下文中的用户代理或平台不允许该请求，可能是因为用户拒绝了授权（没有遗留代码值和常量的名字）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("DOMError") }}
