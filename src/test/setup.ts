import '@testing-library/jest-dom'

class MockIntersectionObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
}

if (!globalThis.IntersectionObserver) {
	globalThis.IntersectionObserver =
		MockIntersectionObserver as unknown as typeof IntersectionObserver
}
