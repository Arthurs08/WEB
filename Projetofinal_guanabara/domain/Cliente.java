package Projetofinal_guanabara.domain;

public class Cliente extends Pessoa{
    private String login;
    private int totAssitido;

    //contrutor
    public Cliente(String nome, int idade, String sexo, String login) {
        super(nome, idade, sexo);
        this.login = login;
        this.totAssitido = 0;
    }

    //getter and setter
    public String getLogin() {
        return login;
    }
    public void setLogin(String login) {
        this.login = login;
    }
    public int getTotAssitido() {
        return totAssitido;
    }
    public void setTotAssitido(int totAssitido) {
        this.totAssitido = totAssitido;
    }

    public void viuMaisUm(){
        this.totAssitido++;
    }

    @Override
    public String toString() {
        return "Cliente [" + super.toString() +"\nlogin=" + login + ", totAssitido=" + totAssitido + "]";
    }
    
}
