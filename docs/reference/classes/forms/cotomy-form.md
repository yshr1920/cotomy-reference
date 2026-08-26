---
title: CotomyForm
sidebar_position: 1
---

# CotomyForm

Abstract base class for Cotomy-managed forms. Calling initialize() wires a
submit handler that prevents the browser's default submission and propagation,
then calls submitAsync(). Using CotomyForm therefore means that Cotomy controls
the form's submission.

Ordinary HTML GET and POST forms do not need CotomyForm. Leave them as native
`<form>` elements when standard browser submission and page navigation are the
desired behavior.

**Properties**

| Property | Type | Description |
| --- | --- | --- |
| actionUrl | string | Form action URL (defaults to current path + query). |
| autoReload | boolean | Whether the form reloads on page restoration. |
| initialized | boolean | true after event handlers are wired. |

**Methods**

| Method | Description |
| --- | --- |
| generateId(prefix?) | Ensures the form has an id. |
| reloadAsync() | Reloads the page (uses CotomyWindow). |
| initialize() | Wires submit handler and marks the form as initialized. |
| submitAsync() | Abstract method implemented by subclasses to perform submission under Cotomy's control. |
