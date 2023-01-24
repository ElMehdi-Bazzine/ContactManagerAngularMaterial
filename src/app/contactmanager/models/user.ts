import { Notes } from "./notes";

export class User {
  id: number | undefined;
  birthDate: Date | undefined;
  name: string | undefined;
  avatar: string | undefined;
  bio: string | undefined;

  notes: Notes[] | undefined;
}
