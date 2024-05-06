package Projetofinal_guanabara.domain;

import Projetofinal_guanabara.Acoes_videos;

public class Video implements Acoes_videos{
    private String titulo;
    private float avaliacao;
    private float views;
    private float curtidas;
    private boolean reproduzindo;

    //contrutor
    public Video(String titulo) {
        this.titulo = titulo;
        this.avaliacao = 1;
        this.views = 0;
        this.curtidas = 0;
        this.reproduzindo = false;
    }

    //métodos para polimorfismo sobrescrito
    @Override
    public void play() {
        this.reproduzindo = true;
    }

    @Override
    public void pause() {
        this.reproduzindo = false;
    }

    @Override
    public void like() {
        this.curtidas++;
    }

    //getter and setter
    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public float getAvailiacao() {
        return avaliacao;
    }

    public void setAvailiacao(int avaliacao) {
        float nova;
        nova = (this.avaliacao + avaliacao) / this.views;
        this.avaliacao = nova;
    }

    public float getViews() {
        return views;
    }

    public void setViews(float views) {
        this.views = views;
    }

    public float getCurtidas() {
        return curtidas;
    }

    public void setCurtidas(float curtidas) {
        this.curtidas = curtidas;
    }

    public boolean isReproduzindo() {
        return reproduzindo;
    }

    public void setReproduzindo(boolean reproduzindo) {
        this.reproduzindo = reproduzindo;
    }

    @Override
    public String toString() {
        return "Video [titulo=" + titulo + ", avaliacao=" + avaliacao + ", views=" + views + ", curtidas=" + curtidas + ", reproduzindo=" +  reproduzindo + "]";
    }

}
