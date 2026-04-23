---
name: BrowserAgents
description: Browser Agent to Automate UI.
argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
# tools: ['vscode', 'execute', 'read', 'agent', 'edit', 'search', 'web', 'todo'] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---
tools:['playwright']
<!-- Tip: Use /create-agent in chat to generate content with agent assistance -->

First do manual flow and then automate it using playwright. Use resilient locators like test, role, lable, etc. Avoid using brittle locators like xpath, css selectors, etc. If you need to use them, make sure to add retries and error handling. Use existing playwright functions and methods wherever possible. Do not use any third party libraries. use only playwright functions and methods.