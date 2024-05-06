package Projetofinal_guanabara;

import Projetofinal_guanabara.domain.Cliente;
import Projetofinal_guanabara.domain.Video;
import Projetofinal_guanabara.domain.Visualizacao;

public class Projetofinal_guanabara {
    public static void main(String[] args) {
        Video video[] = new Video[3];
        video[0] = new Video("Como fazer massinha!!");
        video[1] = new Video("MATEI MINHA GALINHA NO MINECRAFT????");
        video[2] = new Video("Ajudei 17 mendigos dando cachaça pra eles!!");

        Cliente c[] = new Cliente[3];
        c[0] = new Cliente("Pedro", 12, "Masculino", "boludoMaluco");
        c[1] = new Cliente("Carla", 20, "Feminino", "Carlamassinha");
        c[2] = new Cliente("Maria", 34, "Feminino", "Flores1990");  
        
        Visualizacao vis[] = new Visualizacao[5];
        vis[0]= new Visualizacao(c[0], video[1]);
        vis[0].avaliar(87.0f);
        vis[1]= new Visualizacao(c[1], video[0]);
        vis[1].avaliar();
        vis[2]= new Visualizacao(c[2], video[2]);
        vis[3]= new Visualizacao(c[0], video[1]);
        vis[3].avaliar(50.0f);
        vis[4]= new Visualizacao(c[2], video[1]);
        for(int f= 0; f < vis.length; f++){
            System.out.println(vis[f]);
        }
        //for para mostrar conteudo de um vetor
   //     for(int v = 0; v < video.length; v++){
   //         System.out.println(video[v]);
   //     }
        
    }
}
