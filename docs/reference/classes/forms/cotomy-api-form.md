---
title: CotomyApiForm
sidebar_position: 4
---

# CotomyApiForm

Cotomy-managed form that intercepts submission, sends FormData to an API
endpoint without native page navigation, and surfaces failure events. For an
ordinary POST followed by browser navigation, use a native HTML form instead.

**Properties**

| Property | Type | Description |
| --- | --- | --- |
| actionUrl | string | Form action URL (required). |

**Methods**

| Method | Description |
| --- | --- |
| apiClient() | Returns a new CotomyApi instance. |
| apiFailed(handle) | Subscribes to cotomy:apifailed. |
| submitFailed(handle) | Subscribes to cotomy:submitfailed. |
| formData() | Builds a FormData from form fields and normalizes datetime-local to YYYY-MM-DDTHH:mmZ. |
| submitAsync() | Builds FormData and submits to the API. |

**Protected Methods (for subclassing)**  
| Method | Description |
| --- | --- |
| triggerApiFailedEvent(response) | Dispatches the API failed event. |
| triggerSubmitFailedEvent(response) | Dispatches the submit failed event. |
| submitToApiAsync(formData) | Submits FormData and returns the response. |
