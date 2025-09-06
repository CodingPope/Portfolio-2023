# Dependency Upgrade Plan for Portfolio

## Current Issues

- 29 vulnerabilities (3 low, 16 moderate, 10 high)
- Major outdated packages, including Next.js, React, and core libraries
- Security vulnerabilities in multiple packages

## Upgrade Strategy

### Phase 1: Security Fixes (Non-Breaking)

```bash
# Install specific security patches
npm install got@11.8.5 semver@7.5.4 tar@6.2.1
```

### Phase 2: Update Core Framework (Next.js)

```bash
# Update Next.js and related dependencies
npm install next@13.5.6 eslint-config-next@13.5.6
```

> **Note**: We're first upgrading to Next.js 13 as an intermediate step before moving to Next.js 15

### Phase 3: Update React

```bash
# Update React after Next.js is stable
npm install react@18.2.0 react-dom@18.2.0
```

### Phase 4: Update Key Dependencies

```bash
# Update key libraries
npm install framer-motion@10.16.4 three@0.156.0 mdx-bundler@10.0.0
```

### Phase 5: Full Modernization

```bash
# After testing that everything works, move to the latest versions
npm install next@15.5.2 react@19.1.1 react-dom@19.1.1
```

## Breaking Changes to Watch For

1. **Next.js 13+ Changes**:

   - App Router replaces Pages Router
   - Image component changes
   - Layout system changes

2. **React 19 Changes**:

   - New hooks and APIs
   - Potential rendering behavior changes

3. **Build Process**:
   - The `next export` command in your build script may need updates
   - Static export has different configuration in Next.js 13+

## Testing Strategy

After each phase:

1. Run `npm run dev` to check development environment
2. Run `npm run build` to verify build process
3. Test key features of your portfolio site
4. Fix any issues before proceeding to the next phase

## Final Security Check

After completing all upgrades:

```bash
npm audit
```

Should show significantly fewer vulnerabilities, ideally zero high severity issues.
