```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: No dependencies means runs only once after mount
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```