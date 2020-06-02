export const fetchProfile = (id) => Promise.resolve({
  id,
  name: "John Doe",
  phone: "123456",
  email: "john.doe@example.com"
});
