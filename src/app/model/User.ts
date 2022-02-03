export class User {
    userName!: string;
    mobileNo!: number;
    emailId!: string;
    skills: string[] = ['Java', 'Angular'];

    addSkill(skill: string) {
        this.skills.push(skill);
    }
}