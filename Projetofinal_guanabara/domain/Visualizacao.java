package Projetofinal_guanabara.domain;

public class Visualizacao {
    private Cliente espectador;
    private Video filme;
    

    
    public Visualizacao(Cliente espectador, Video filme) {
        this.espectador = espectador;
        this.filme = filme;
        this.getEspectador().viuMaisUm();
        this.filme.setViews(this.filme.getViews()+1);
    }
    
    public Cliente getEspectador() {
        return espectador;
    }
    public void setEspectador(Cliente espectador) {
        this.espectador = espectador;
    }
    public Video getFilme() {
        return filme;
    }
    public void setFilme(Video filme) {
        this.filme = filme;
    }

    @Override
    public String toString() {
        return "Visualizacao [espectador= " + espectador + ", filme=" + filme + "]";
    }
    public void avaliar(){
        this.filme.setAvailiacao(5);
    }
    public void avaliar(int nota){
        this.filme.setAvailiacao(nota);
    }
    public void avaliar(float porc){
        int tot = 0;
        if (porc <= 20){
            tot = 3;
        }else if(porc <= 50){
            tot = 5;
        }else if (porc <= 90){
            tot = 8;
        }else{
            tot = 10;
        }
        this.filme.setAvailiacao(tot);
    }
     
}
