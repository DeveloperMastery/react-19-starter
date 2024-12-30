function Profile() {
  return (
    <img
      src='https://images.unsplash.com/photo-1732262548358-b3b82fa7d4d2?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      alt='Profile image'
    />
  );
}

function Gallery() {
  return (
    <section>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

export default Gallery;
