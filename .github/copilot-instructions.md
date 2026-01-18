## Purpose

This file gives concise, repo-specific guidance to AI agents contributing code here. Focus on being minimal, predictable, and referencing concrete files and commands.

## Quick Start (Dev)
- Run locally: `npm run dev` (uses `nodemon` + `babel-node` to run `src/app.js`).
- Build: `npm run build` (Babel -> `dist/`).
- Start production-like: `npm start` (runs `npm run build` then `node dist/app.js`).

## Big Picture
- Express API with a single resource: Todos. Entry point: `src/app.js`.
- Routing: `src/routes/todo.route.js` mounts `'/todos'` and creates a `TodoController` instance.
- Controller layer: `src/controller/todo.controller.js` — binds methods in the constructor so handlers keep `this`.
- Service layer: `src/service/todo.service.js` — uses `AppDataSource.getRepository()` to interact with the DB.
- Data model: `src/entity/todo.entity.js` — TypeORM `EntitySchema` (no decorators).
- DB config: `src/database/data-source.js` — uses PostgreSQL; credentials are in this file currently.

## Conventions & Patterns
- ES modules (`type: "module"` in `package.json`).
- One controller instance per router file; controller methods are class methods bound in the constructor.
- Services hold repository references (`this.repository = AppDataSource.getRepository(TodoEntity)`).
- Error handling: controllers catch and return `500` with `{ message }`.
- When adding entities, update `entities` in `src/database/data-source.js` (currently a specific file path is used, not a glob).

## Integration Points
- PostgreSQL at `localhost:5432` using DB `todo_api` by default – change in `src/database/data-source.js`.
- TypeORM is configured with `synchronize: true` (schema syncs automatically in dev).

## Useful Files to Inspect
- Router: `src/routes/todo.route.js`
- Controller: `src/controller/todo.controller.js`
- Service: `src/service/todo.service.js`
- Entity: `src/entity/todo.entity.js`
- DB: `src/database/data-source.js`

## Notes & Known Issues (discoverable)
- `TodoService.getTodoById` returns immediately; subsequent `if(!todo)` check is unreachable — watch for this pattern.
- `deleteTodo` currently returns twice; make intentions explicit when modifying.

## PR Guidance for Agents
- Keep changes minimal and focused; match existing style and structure.
- Update `src/database/data-source.js` when adding new entities or changing DB settings.
- Run `npm run dev` to sanity-check changes (hot reload helps iterate quickly).

If anything here is unclear or missing, tell me what extra details you'd like included.
