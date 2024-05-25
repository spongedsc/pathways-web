# API Usage

## Upload

POST `/create` with a bearer token (defined in your `API_TOKEN` environment variable) in the `Authorization` header and a JSON payload containing:

```json
{
    "content": "# Markdown",
}
```

The response will be a JSON object containing the ID of the uploaded markdown content.

Example response:

```json
{
    "id": "zjxHAc2TNP"
}
```

This ID can be used to access the markdown content via `/[id]`, which returns a HTML page.

### Examples

Using `curl`:

```bash
curl -X POST -H "Content-Type: application/json" \
 -H "Authorization: Bearer xxxxxxxxxxxxxxxxxxxxx" \ 
 -d '{"content":"# Markdown"}' \
  http://localhost:5173/create
```

Using `fetch`:

```javascript
fetch('http://localhost:5173/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization ': 'Bearer xxxxxxxxxxxxxxxxxxxxx'
    },
    body: JSON.stringify({content: '# Markdown'})
})
```
