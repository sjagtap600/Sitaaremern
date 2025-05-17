// src/pages/Donate.jsx
export default function Donate() {
  const handleDonate = async () => {
    const res = await fetch(`${process.env.REACT_APP_API}/donations/create-checkout-session`, {
      method: 'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify({ amount: 500, recurring: false })
    });
    const { url } = await res.json();
    window.location = url;
  };
  return (
    <div className="p-6">
      <button onClick={handleDonate}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
        Donate ₹500
      </button>
    </div>
  );
}
