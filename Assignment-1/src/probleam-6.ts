interface Profile {
    name: string;
    age: number;
    email: string;
}
type upProfile = (prof: Profile, up : Partial<Profile>) => Profile;

const  updateProfile: upProfile  =  (profile, updates)=> {
    return { ...profile, ...updates };
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));